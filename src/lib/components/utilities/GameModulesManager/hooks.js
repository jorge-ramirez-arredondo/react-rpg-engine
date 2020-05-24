import { useContext, useCallback } from "react";

import GameModulesManagerContext from "./GameModulesManagerContext";
import useAsyncResource from "lib/utilities/hooks/useAsyncResource";

function useGameModulesManager() {
  return useContext(GameModulesManagerContext);
}

function useGameModule(moduleKey = null) {
  const { getModule: gmmGetModule } = useGameModulesManager();

  const getterFn = useCallback(() =>
    gmmGetModule(moduleKey),
    [gmmGetModule, moduleKey]
  );

  const {
    resource: module,
    loading,
    success,
    error
  } = useAsyncResource(moduleKey === null ? null : getterFn);

  return {
    module,
    loading,
    success,
    error
  };
}

export {
  useGameModulesManager,
  useGameModule
};
