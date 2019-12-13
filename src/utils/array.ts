export function sortWithBoolean(
  prev: boolean,
  next: boolean,
  reverse: boolean = false
): number {
  if (reverse) {
    return Number(next) - Number(prev);
  }
  return Number(prev) - Number(next);
}
