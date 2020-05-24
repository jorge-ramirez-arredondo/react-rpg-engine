/*
  A play state represents the main state of game play the game is currently in.
  Ex: Exploration, scene, battle, etc.
*/
import { createSlice } from "@reduxjs/toolkit";

import playStates from "lib/constants/playStates";

const initialState = null;

const playState = createSlice({
  name: "playState",
  initialState,
  reducers: {
    set: (state, action) => {
      if (action.payload === null) {
        return null;
      }

      const newPlayState = playStates[action.payload];

      if (!newPlayState) {
        throw new Error(`Invalid play state "${String(action.payload)}".`);
      }

      return newPlayState;
    },
    clear: () => initialState
  }
});

const { actions } = playState;

export default playState;
export { actions };
