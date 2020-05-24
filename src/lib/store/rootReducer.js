import { combineReducers } from "redux";

import player from "./slices/player";
import playState from "./slices/playState";

const gameReducer = combineReducers({
  player: player.reducer,
  playState: playState.reducer
});

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;
