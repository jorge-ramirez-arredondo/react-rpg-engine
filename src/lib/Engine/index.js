import React, { useRef } from "react";
import { Provider } from "react-redux";

import RootRouter from "lib/components/routers/RootRouter";
import generateStore from "lib/store/generateStore";
import GameModulesManager from "lib/components/utilities/GameModulesManager";

function Engine(props) {
  const { moduleGetters } = props;

  const storeRef = useRef(null);
  if (storeRef.current === null) {
    storeRef.current = generateStore();
  }

  return (
    <Provider store={storeRef.current}>
      <GameModulesManager moduleGetters={moduleGetters}>
        <RootRouter />
      </GameModulesManager>
    </Provider>
  );
}

export default Engine;
