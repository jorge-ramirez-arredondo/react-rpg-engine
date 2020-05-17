import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
  activeModuleKey: null
};
var gameModule = createSlice({
  name: "gameModule",
  initialState: initialState,
  reducers: {
    setActiveModuleKey: {
      reducer: function reducer(state) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$payload = _ref.payload;

        _ref$payload = _ref$payload === void 0 ? {} : _ref$payload;
        var activeModuleKey = _ref$payload.activeModuleKey;
        return _objectSpread({}, state, {
          activeModuleKey: activeModuleKey
        });
      },
      prepare: function prepare(activeModuleKey) {
        return {
          payload: {
            activeModuleKey: activeModuleKey
          }
        };
      }
    },
    clear: function clear() {
      return initialState;
    }
  }
});
var actions = gameModule.actions;
export default gameModule;
export { actions };