import React, { useRef } from "react";
import { Provider, useSelector } from "react-redux";

import AppRouter from "components/routers/AppRouter";
import generateStore from "store/generateStore";
import GameModuleLoader from "components/utilities/GameModuleLoader";
import gameModules from "gameModules";

function WrappedGameModuleLoader(props) {
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
      <WrappedGameModuleLoader gameModules={gameModules}>
        <AppRouter />
      </WrappedGameModuleLoader>
    </Provider>
  );
}

export default App;
