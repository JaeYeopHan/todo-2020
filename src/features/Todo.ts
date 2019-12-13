import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { generateId } from "@/utils/item";

export interface IItem {
  id: string;
  contents: string;
  createdTime: number;
  isCompleted: boolean;
}

export interface ITodo {
  items: IItem[];
  currentFilter: Filter;
}

export enum Filter {
  ALL = "All",
  ACTIVE = "Active",
  DONE = "Done"
}

export interface IAddPayload {
  contents: string;
  createdTime: number;
}

const initialState: ITodo = {
  items: [],
  currentFilter: Filter.ALL
};

const _ = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    add(state, { payload }: PayloadAction<IAddPayload>) {
      const { contents, createdTime } = payload;

      state.items.push({
        id: generateId(createdTime),
        contents,
        createdTime,
        isCompleted: false
      });
    }
  }
});

export const COUNTER = _.name;
export const counterActions = _.actions;
export const counterReducer = _.reducer;
