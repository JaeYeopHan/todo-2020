import React from "react";
import { useDispatch } from "react-redux";

import { IItem, todoActions } from "@/features/Todo";

interface IItemProps extends IItem {}

export const Item = (props: IItemProps) => {
  const dispatch = useDispatch();
  const { id, contents, isCompleted } = props;

  return (
    <li>
      <label htmlFor={id} />
      <input
        type="checkbox"
        id={id}
        checked={isCompleted}
        onChange={() => dispatch(todoActions.toggle({ id }))}
      />
      <div>{contents}</div>
      <button onClick={() => dispatch(todoActions.delete({ id }))}>
        Delete
      </button>
    </li>
  );
};
