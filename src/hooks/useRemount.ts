import { Dispatch, SetStateAction, useCallback, useState } from "react";

export function useRemount(): [number, Dispatch<SetStateAction<number>>] {
  const [key, setKey] = useState(0);
  const remount = useCallback(() => setKey(key => key + 1), []);

  return [key, remount];
}
