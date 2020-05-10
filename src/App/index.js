import React, { useRef } from "react";
import { Provider, useSelector } from "react-redux";

import RootRouter from "components/routers/RootRouter";
import generateStore from "store/generateStore";
import GameModuleLoader from "components/utilities/GameModuleLoader";
import gameModules from "gameModules";

function ConnectedGameModuleLoader(props) {
  const activeModuleKey = useSelector((state) => state.game.module.activeModuleKey);

  return (
    <GameModuleLoader
      {...props}
      activeModuleKey={activeModuleKey}
    />
  );
}

function App() {
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

export default App;
