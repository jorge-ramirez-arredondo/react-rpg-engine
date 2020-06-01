import React, { useRef } from "react";
import { Provider as StoreProvider } from "react-redux";

import RootRouter from "lib/components/routers/RootRouter";
import generateStore from "lib/store/generateStore";
import GameModulesManager from "lib/components/utilities/GameModulesManager";
import EngineConfigProvider from "lib/components/utilities/EngineConfigProvider";

function Engine(props) {
  const { moduleGetters, config } = props;

  const storeRef = useRef(null);
  if (storeRef.current === null) {
    storeRef.current = generateStore();
  }

  return (
    <EngineConfigProvider configOverride={config}>
      <StoreProvider store={storeRef.current}>
        <GameModulesManager moduleGetters={moduleGetters}>
          <RootRouter />
        </GameModulesManager>
      </StoreProvider>
    </EngineConfigProvider>
  );
}

export default Engine;
