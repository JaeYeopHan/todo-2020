import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { isValidateInput } from "@/utils/validate";

export const useValidateInput = (
  intialValue = ""
): [string, Dispatch<SetStateAction<string>>, boolean, boolean] => {
  const [val, setVal] = useState(intialValue);
  const [isError, setError] = useState(false);
  const isEmpty = val === "";

  useEffect(() => {
    setError(!isValidateInput(val));
  }, [val]);

  return [val, setVal, isError, isEmpty];
};
