import { getItem, setItem } from "./localStorage";

const TODO_ITEMS = "__LOCALSTORAGE_TODO_ITEMS_KEY__";

export function getState<T>(defaultValue: T) {
  return getItem(TODO_ITEMS, defaultValue);
}

export function setState<T>(val: T) {
  return setItem(TODO_ITEMS, val);
}
