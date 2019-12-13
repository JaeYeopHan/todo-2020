import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import { COUNTER,counterReducer } from "./Todo";

const rootReducer = combineReducers({
  [COUNTER]: counterReducer
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default store;
