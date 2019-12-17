export function encode(val: string) {
  return window.btoa(encodeURIComponent(val));
}

export function decode(encodeed: string) {
  return decodeURIComponent(window.atob(encodeed));
}
