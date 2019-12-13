import { generateId } from "./item";

test("should return item id", () => {
  // Given
  const timestamp = new Date().getTime();

  // When
  const result = generateId(timestamp);

  // Then
  expect(result).toBe(`item_${timestamp}`);
});
