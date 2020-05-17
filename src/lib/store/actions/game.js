import config from "lib/constants/config";
import { actions as gameModuleActions } from "lib/store/slices/gameModule";

const newGame = () => (dispatch) => {
  dispatch(gameModuleActions.setActiveModuleKey(config.newGameModuleKey));
};

const actions = {
  newGame
};

export default actions;
