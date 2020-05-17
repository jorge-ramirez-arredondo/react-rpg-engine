import { combineReducers } from "redux";

import gameModule from "./slices/gameModule";
import player from "./slices/player";

const gameReducer = combineReducers({
  module: gameModule.reducer,
  player: player.reducer
});

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;
