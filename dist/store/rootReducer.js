import { combineReducers } from "redux";
import gameModule from "./slices/gameModule";
import player from "./slices/player";
var gameReducer = combineReducers({
  module: gameModule.reducer,
  player: player.reducer
});
var rootReducer = combineReducers({
  game: gameReducer
});
export default rootReducer;