import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Robin"
};

const player = createSlice({
  name: "player",
  initialState,
  reducers: {
    setName: (state, action) => ({ ...state, name: action.payload }),
    reset: () => initialState
  }
});

const { actions } = player;

export default player;
export { actions };
