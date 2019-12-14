import {
  combineReducers,
  Dispatch,
  getDefaultMiddleware,
  Middleware,
  MiddlewareAPI
} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import { setState } from "@/utils/storage";

import { TODO, todoReducer } from "./Todo";

const rootReducer = combineReducers({
  [TODO]: todoReducer
});

function persist() {
  const persistMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
    next: Dispatch
  ) => action => {
    const returnValue = next(action);

    setState(getState());

    return returnValue;
  };

  return persistMiddleware;
}
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), persist()]
});

export type IRootState = ReturnType<typeof rootReducer>;
export default store;
