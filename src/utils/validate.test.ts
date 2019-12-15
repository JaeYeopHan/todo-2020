import { isValidateInput } from "./validate";

test("isValidateInput return validate", () => {
  // Given, When, Then
  expect(isValidateInput("테스트")).toBeTruthy();
  expect(isValidateInput("test")).toBeTruthy();
  expect(isValidateInput("12/27")).toBeTruthy();
  expect(isValidateInput("?")).toBeFalsy();
  expect(isValidateInput("test$")).toBeFalsy();
});
