import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const name = "Toast";

export interface IToast {
  [key: string]: boolean;
}
const initialState: IToast = {};

const _ = createSlice({
  name,
  initialState,
  reducers: {
    open(state: IToast, action: PayloadAction<string>) {
      state[action.payload] = true;
    },
    close(state: IToast, action: PayloadAction<string>) {
      state[action.payload] = false;
    }
  }
});

export const TOAST = _.name;
export const toastActions = _.actions;
export const toastReducer = _.reducer;
