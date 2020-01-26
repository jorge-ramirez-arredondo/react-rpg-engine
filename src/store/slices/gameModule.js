import { createSlice } from "@reduxjs/toolkit";

import { loadModule as loadModuleCall } from "gameModules";

const initialState = {
  activeModuleKey: null,
  module: null,
  loading: false,
  success: false,
  error: null
};

const gameModule = createSlice({
  name: "gameModule",
  initialState,
  reducers: {
    loading: (state) => ({
      ...state,
      loading: true,
      error: null
    }),
    success: {
      reducer: (state, { payload: { activeModuleKey, module } = {} } = {}) => ({
        ...state,
        activeModuleKey,
        module,
        loading: false,
        success: true,
        error: null
      }),
      prepare: (activeModuleKey, module) => ({
        payload: {
          activeModuleKey,
          module
        }
      })
    },
    error: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload
    }),
    reset: () => initialState
  }
});

const { actions } = gameModule;

actions.loadModule = (moduleKey) => (dispatch) => {
  dispatch(actions.loading());
  loadModuleCall(moduleKey)
    .then((module) => dispatch(actions.success(moduleKey, module)))
    .catch((error) => dispatch(actions.error(error)));
}

export default gameModule;
export { actions };
