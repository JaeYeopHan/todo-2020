import classnames from "classnames";
import { useState } from "react";

export function useTouchStyle(
  defaultClassName: string,
  selectClassName: string
) {
  const [isClicked, setClicking] = useState(false);
  const className = classnames(defaultClassName, {
    [selectClassName]: isClicked
  });
  const onTouchStart = () => setClicking(true);
  const onTouchEnd = () => setClicking(false);

  return {
    className,
    onTouchStart,
    onTouchEnd
  };
}
