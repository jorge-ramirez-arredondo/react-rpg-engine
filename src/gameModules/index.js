import * as gameModules from "./gameModules";

async function loadModule(moduleKey) {
  return gameModules[moduleKey]();
}

export default gameModules;
export {
  loadModule
};
