import React from "react";

import { IItem } from "@/features/Todo";

interface IItemProps extends IItem {}

export const Item = (props: IItemProps) => {
  const { id, contents } = props;
  return (
    <li>
      <label htmlFor={id} />
      <input type="checkbox" id={id}></input>
      <div>{contents}</div>
    </li>
  );
};
