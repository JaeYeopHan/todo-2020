import { toastActions, toastReducer } from "./Toast";

test("toastActions open", () => {
  // Given
  const key = "test";
  const prevState = {};

  // When
  const result = toastReducer(prevState, toastActions.open(key));

  // Then
  expect(result[key]).toEqual(true);
});

test("toastActions close", () => {
  // Given
  const key = "test";
  const prevState = {};

  // When
  const result = toastReducer(prevState, toastActions.close(key));

  // Then
  expect(result[key]).toEqual(false);
});
