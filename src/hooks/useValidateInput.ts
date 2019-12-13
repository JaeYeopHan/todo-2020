import { Dispatch, SetStateAction, useEffect, useState } from "react";

function isValidate(val: string) {
  return val !== "a";
}

export const useValidateInput = (
  intialValue = ""
): [string, Dispatch<SetStateAction<string>>, boolean, boolean] => {
  const [val, setVal] = useState(intialValue);
  const [isError, setError] = useState(false);
  const isEmpty = val === "";

  useEffect(() => {
    setError(!isValidate(val));
  }, [val]);

  return [val, setVal, isError, isEmpty];
};
