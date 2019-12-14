import {
  combineReducers,
  configureStore,
  Dispatch,
  getDefaultMiddleware,
  Middleware,
  MiddlewareAPI
} from "@reduxjs/toolkit";

import { setState } from "@/utils/storage";

import { TODO, todoReducer } from "./Todo";

const rootReducer = combineReducers({
  [TODO]: todoReducer
});

const persistMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
  next: Dispatch
) => action => {
  const returnValue = next(action);

  setState(getState());

  return returnValue;
};

export type IRootState = ReturnType<typeof rootReducer>;
export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), persistMiddleware]
});
