import React, { useRef } from "react";
import { Provider, useSelector } from "react-redux";

import RootRouter from "lib/components/routers/RootRouter";
import generateStore from "lib/store/generateStore";
import GameModuleLoader from "lib/components/utilities/GameModuleLoader";

function ConnectedGameModuleLoader(props) {
  const activeModuleKey = useSelector((state) => state.game.module.activeModuleKey);

  return (
    <GameModuleLoader
      {...props}
      activeModuleKey={activeModuleKey}
    />
  );
}

function Engine(props) {
  const { gameModules } = props;

  const storeRef = useRef(null);
  if (storeRef.current === null) {
    storeRef.current = generateStore();
  }

  return (
    <Provider store={storeRef.current}>
      <ConnectedGameModuleLoader gameModules={gameModules}>
        <RootRouter />
      </ConnectedGameModuleLoader>
    </Provider>
  );
}

export default Engine;
