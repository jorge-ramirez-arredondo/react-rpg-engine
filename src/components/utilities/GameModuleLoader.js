import React, { useState, useContext, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const GameModuleLoaderContext = React.createContext();
const { Provider, Consumer } = GameModuleLoaderContext;

function useGameModuleLoader() {
  return useContext(GameModuleLoaderContext);
}

function GameModuleLoader(props) {
  const { gameModules, activeModuleKey, children } = props;

  const [activeModule, setActiveModule] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const onLoading = useCallback(() => {
    setLoading(true);
  }, [setLoading]);

  const onSuccess = useCallback((newActiveModule, newActiveModuleKey) => {
    setActiveModule(newActiveModule);
    setLoading(false);
    setSuccess(true);
    setError(null);
  }, [
    setActiveModule,
    setLoading,
    setSuccess,
    setError
  ]);

  const onError = useCallback((newError) => {
    setActiveModule(null);
    setLoading(false);
    setSuccess(false);
    setError(newError);
  }, [
    setActiveModule,
    setLoading,
    setSuccess,
    setError
  ]);

  // Wrap getting of module in async function so it can be used with await safely.
  const loadModule = useCallback(async (newModuleKey) => {
    return gameModules[newModuleKey]();
  }, [gameModules]);

  const load = useCallback(async (newModuleKey) => {
    onLoading();
    try {
      const newModule = await loadModule(newModuleKey);
      onSuccess(newModule, newModuleKey);
    } catch(newError) {
      onError(newError);
    }
  }, [onLoading, loadModule, onSuccess, onError]);

  const clear = useCallback(() => {
    setActiveModule(null);
    setLoading(false);
    setSuccess(false);
    setError(null);
  }, [
    setActiveModule,
    setLoading,
    setSuccess,
    setError
  ]);

  useEffect(() => {
    if (activeModuleKey === null) {
      clear();
    } else {
      load(activeModuleKey);
    }
  }, [activeModuleKey, clear, load]);

  return (
    <Provider
      value={{
        activeModuleKey,
        activeModule,
        loading,
        success,
        error
      }}
    >
      {children}
    </Provider>
  );
}

GameModuleLoader.propTypes = {
  gameModules: PropTypes.object.isRequired,
  activeModuleKey: PropTypes.string,
  children: PropTypes.node
};

GameModuleLoader.defaultProps = {
  activeModuleKey: null,
  children: null
};

export default GameModuleLoader;
export {
  Consumer,
  useGameModuleLoader
};
