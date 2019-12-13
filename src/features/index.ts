import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import { TODO, todoReducer } from "./Todo";

const rootReducer = combineReducers({
  [TODO]: todoReducer
});

const store = configureStore({ reducer: rootReducer });

export type IRootState = ReturnType<typeof rootReducer>;
export default store;
