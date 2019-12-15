export function encode(val: string) {
  return btoa(val);
}

export function decode(encodeed: string) {
  return atob(encodeed);
}
