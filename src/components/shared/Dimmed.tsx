import "./Dimmed.scss";

import React, { ReactNode } from "react";

interface IDimmedProps {
  isShow: boolean;
  children: ReactNode;
}

export const Dimmed = (props: IDimmedProps) => {
  return (
    <div
      className="dimmed"
      style={{ display: props.isShow ? "block" : "none" }}
    >
      {props.children}
    </div>
  );
};
