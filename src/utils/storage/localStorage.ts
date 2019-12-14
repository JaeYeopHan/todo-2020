export function getItem<T>(key: string, defaultValue: T) {
  if (!window.localStorage) {
    return defaultValue;
  }

  const value = window.localStorage.getItem(key);

  if (!value) {
    return defaultValue;
  }

  return JSON.parse(value);
}

export function setItem<T>(key: string, value: T) {
  if (!window.localStorage) {
    return;
  }

  return window.localStorage.setItem(key, JSON.stringify(value));
}
