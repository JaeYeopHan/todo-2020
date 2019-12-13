import React, { ReactNode } from "react";

interface IMainProps {
  children: ReactNode;
}

export const Main = (props: IMainProps) => {
  return <main>{props.children}</main>;
};
