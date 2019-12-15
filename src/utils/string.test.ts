import { removeLastCharacter } from "./string";

test("removeLastCharacter", () => {
  // Given
  const val = "test$";

  // When
  const result = removeLastCharacter(val);

  // Then
  expect(result).toEqual("test");
});
