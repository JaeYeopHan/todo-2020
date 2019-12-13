import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { generateId } from "@/utils/item";

export interface IItem {
  id: string;
  contents: string;
  createdTime: number;
  isCompleted: boolean;
}

export type IItemIdentity = Pick<IItem, "id">;

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

export interface IDeletePayload extends IItemIdentity {}

export interface ITogglePayload extends IItemIdentity {}

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
    },
    delete(state, { payload }: PayloadAction<IDeletePayload>) {
      const newItems = state.items.filter(({ id }) => payload.id !== id);

      state.items = newItems;
    },
    toggle(state, { payload }: PayloadAction<ITogglePayload>) {
      const newItems = state.items.map((item: IItem) => {
        if (payload.id === item.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });

      state.items = newItems;
    },
    changeFilter(state, { payload }: PayloadAction<{ filter: Filter }>) {
      state.currentFilter = payload.filter;
    }
  }
});

const getFilter = (state: ITodo) => state.currentFilter;
const getItems = (state: ITodo) => state.items;
const getVisibleItems = createSelector(
  [getFilter, getItems],
  (filter, items) => {
    switch (filter) {
      case Filter.ALL:
        return items;
      case Filter.ACTIVE:
        return items.filter(item => !item.isCompleted);
      case Filter.DONE:
        return items.filter(item => item.isCompleted);
    }
  }
);

export const todoSelectors = {
  filter: getFilter,
  items: getItems,
  visibleItems: getVisibleItems
};

export const TODO = _.name;
export const todoActions = _.actions;
export const todoReducer = _.reducer;
