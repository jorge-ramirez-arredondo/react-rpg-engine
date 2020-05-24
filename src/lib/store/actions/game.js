import config from "lib/constants/config";
import { actions as playStateActions } from "lib/store/slices/playState";

const newGame = () => (dispatch) => {
  dispatch(playStateActions.set(config.newGamePlayState));
};

const actions = {
  newGame
};

export default actions;
