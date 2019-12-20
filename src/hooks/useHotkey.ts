import hotkeys from "hotkeys-js";
import { createRef, Ref, useEffect } from "react";

interface IHotkeyOption<T> {
  element: Ref<T>;
  scope: string;
}

const defaultOption: IHotkeyOption<Document> = {
  element: null,
  scope: "default"
};

export function useHotkey<T>(
  key: string,
  handler: Function,
  customOption?: IHotkeyOption<T>
) {
  const option = {
    ...defaultOption,
    ...customOption
  };
  useEffect(() => {
    hotkeys(key, () => {
      handler();
    });

    return () => {
      hotkeys.unbind(key);
    };
  }, [key, handler]);
}
