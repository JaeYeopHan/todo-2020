import "./Main.scss";

import React, { ReactNode } from "react";

interface IMainProps {
  children: ReactNode;
}

export const Main = (props: IMainProps) => {
  return <main className="main">{props.children}</main>;
};
