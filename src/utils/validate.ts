export function isValidateInput(val: string) {
  return !/[$&+,:;=?#|'<>^*%!]/g.test(val);
}
