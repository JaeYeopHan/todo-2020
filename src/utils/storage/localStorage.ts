import { decode, encode } from "../base64";

export function getItem<T>(key: string, defaultValue: T) {
  if (!window.localStorage) {
    return defaultValue;
  }

  const rawData: string | null = window.localStorage.getItem(key);

  if (!rawData) {
    return defaultValue;
  }

  const decoded = decode(rawData);
  const result = JSON.parse(decoded);

  return result;
}

export function setItem<T>(key: string, value: T) {
  if (!window.localStorage) {
    return;
  }

  const stringifyData = JSON.stringify(value);
  const encoded = encode(stringifyData);

  return window.localStorage.setItem(key, encoded);
}
