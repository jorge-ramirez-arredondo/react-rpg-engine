import React, { useContext } from "react";

import { genConfig } from "lib/constants/baseEngineConfig";

const EngineConfigContext = React.createContext();
const { Provider, Consumer } = EngineConfigContext;

function useEngineConfig() {
  return useContext(EngineConfigContext);
}

function EngineConfigProvider(props) {
  const { children, configOverride } = props;

  return (
    <Provider value={genConfig(configOverride)}>
      {children}
    </Provider>
  );
}

export default EngineConfigProvider;
export {
  Consumer,
  useEngineConfig
};
