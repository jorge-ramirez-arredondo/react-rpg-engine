import config from "constants/config";
import { actions as gameModuleActions } from "store/slices/gameModule";

const newGame = () => (dispatch) => {
  dispatch(gameModuleActions.setActiveModuleKey(config.newGameModuleKey));
};

const actions = {
  newGame
};

export default actions;
