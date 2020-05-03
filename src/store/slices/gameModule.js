import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeModuleKey: null
};

const gameModule = createSlice({
  name: "gameModule",
  initialState,
  reducers: {
    setActiveModuleKey: {
      reducer: (state, { payload: { activeModuleKey } = {} } = {}) => ({
        ...state,
        activeModuleKey
      }),
      prepare: (activeModuleKey) => ({
        payload: {
          activeModuleKey
        }
      })
    },
    clear: () => initialState
  }
});

const { actions } = gameModule;

export default gameModule;
export { actions };
