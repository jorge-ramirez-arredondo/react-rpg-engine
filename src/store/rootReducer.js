import { combineReducers } from "redux";

import gameModule from "./slices/gameModule";
import uiManager from "./slices/uiManager";
import player from "./slices/player";

const gameReducer = combineReducers({
  module: gameModule.reducer,
  uiManager: uiManager.reducer,
  player: player.reducer
});

const rootReducer = combineReducers({
  game: gameReducer
});

export default rootReducer;
