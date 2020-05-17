import config from "../../constants/config";
import { actions as gameModuleActions } from "../slices/gameModule";

var newGame = function newGame() {
  return function (dispatch) {
    dispatch(gameModuleActions.setActiveModuleKey(config.newGameModuleKey));
  };
};

var actions = {
  newGame: newGame
};
export default actions;