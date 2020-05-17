import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
  name: "Robin"
};
var player = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    setName: function setName(state, action) {
      return _objectSpread({}, state, {
        name: action.payload
      });
    },
    reset: function reset() {
      return initialState;
    }
  }
});
var actions = player.actions;
export default player;
export { actions };