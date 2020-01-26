import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentView: "MainMenu"
};

const uiManager = createSlice({
  name: "uiManager",
  initialState,
  reducers: {
    setCurrentView: (state, action) => ({ ...state, currentView: action.payload }),
    reset: () => initialState
  }
});

const { actions } = uiManager;

export default uiManager;
export { actions };
