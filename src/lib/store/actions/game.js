import { actions as playStateActions } from "lib/store/slices/playState";

const newGame = (options) => (dispatch) => {
  const { initialPlayState } = options;

  dispatch(playStateActions.set(initialPlayState));
};

const actions = {
  newGame
};

export default actions;
