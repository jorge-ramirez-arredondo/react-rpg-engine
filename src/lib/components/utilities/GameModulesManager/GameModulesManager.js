/*
  This is a very basic game modules manager.

  Currently, it only provides a function through context that can be used to
  asynchronously get a module by its key. The manager itself does not store any
  modules that are retrieved by the getter function. It is up to consumers to
  store the modules being retrieved themselves.

  Future versions of this manager might be updated to include the following:
  * A caching system so consumers don't have to manage the retrieved modules
    themselves.
  * Pre-loading functionality, so modules can be loaded into the cache before
    they're needed.
*/
import React, { useCallback } from "react";

import { Provider } from "./GameModulesManagerContext";

function GameModulesManager(props) {
  const {
    moduleGetters,
    children
  } = props;

  const getModule = useCallback(async (moduleKey) => {
    return moduleGetters[moduleKey]();
  }, [moduleGetters]);

  return (
    <Provider
      value={{
        getModule
      }}
    >
      {children}
    </Provider>
  );
}

export default GameModulesManager;
