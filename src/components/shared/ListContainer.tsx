import "./ListContainer.scss";

import React, { ReactNode } from "react";

interface IListContainerProps {
  children: ReactNode;
}

export const ListContainer = (props: IListContainerProps) => {
  return <ul className="list">{props.children}</ul>;
};
