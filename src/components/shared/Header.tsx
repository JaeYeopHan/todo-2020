import "./Header.scss";

import React, { ReactNode } from "react";

interface IHeaderProps {
  children: ReactNode;
}

export const Header = (props: IHeaderProps) => {
  return <h1 className="header">{props.children}</h1>;
};
