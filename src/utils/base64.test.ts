import { decode, encode } from "./base64";

test("crypto encode and decode", () => {
  // Given
  const val = "test";

  // When
  const encodeed = encode(val);
  const result = decode(encodeed);

  // Then
  expect(result).toEqual(val);
});
