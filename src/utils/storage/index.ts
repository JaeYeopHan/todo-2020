import { getItem, setItem } from "./localStorage";

const TODO_ITEMS = "__LOCALSTORAGE_TODO_ITEMS_KEY__";

export function getState<T>(name: string, defaultValue: T) {
  const rawData = getItem(TODO_ITEMS, defaultValue);

  if (!rawData) {
    return defaultValue;
  }

  return rawData[name] || defaultValue;
}

export function setState<T>(val: T) {
  return setItem(TODO_ITEMS, val);
}
