import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

function generateStore() {
  return configureStore({
    reducer: rootReducer
  });
}

export default generateStore;