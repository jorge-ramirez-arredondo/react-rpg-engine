import playStates from "lib/constants/playStates";

const baseEngineConfig = {
  newGameModuleKey: "start",
  newGamePlayState: playStates.exploration
};

function genConfig(configOverride = {}) {
  return {
    ...baseEngineConfig,
    configOverride
  };
}

export default baseEngineConfig;
export { genConfig };
