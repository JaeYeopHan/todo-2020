import React, { ReactNode } from "react";

interface IListContainerProps {
  children: ReactNode;
}

export const ListContainer = (props: IListContainerProps) => {
  return <ul>{props.children}</ul>;
};
