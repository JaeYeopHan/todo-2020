import { sortWithBoolean } from "./array";

test("sortWithBoolean", () => {
  // Given
  const arr1 = [true, false];
  const arr2 = [false, true, true, false, true];
  const arr3 = [false, true, true, false];

  // When
  const result1 = arr1.sort(sortWithBoolean);
  const result2 = arr2.sort(sortWithBoolean);
  const result3 = arr3.sort((prev, next) => sortWithBoolean(prev, next, true));

  // Then
  expect(result1).toEqual([false, true]);
  expect(result2).toEqual([false, false, true, true, true]);
  expect(result3).toEqual([true, true, false, false]);
});
