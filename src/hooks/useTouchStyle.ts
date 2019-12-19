import classnames from "classnames";
import { useCallback, useState } from "react";

export function useTouchStyle(
  defaultClassName: string,
  selectClassName: string
) {
  const [isClicked, setClicking] = useState(false);
  const className = classnames(defaultClassName, {
    [selectClassName]: isClicked
  });
  const activate = useCallback(() => setClicking(true), []);
  const inactivate = useCallback(() => setClicking(false), []);

  return {
    className,
    onTouchStart: activate,
    onTouchEnd: inactivate,
    onMouseDown: activate,
    onMouseUp: inactivate
  };
}
