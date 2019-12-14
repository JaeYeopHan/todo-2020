import "./Item.scss";

import classnames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";

import { IItem, todoActions } from "@/features/Todo";

interface IItemProps extends IItem {}

export const Item = (props: IItemProps) => {
  const dispatch = useDispatch();
  const { id, contents, isCompleted } = props;

  const itemContentsStyle = classnames("item-contents", {
    "item-contents--cancel": isCompleted
  });

  return (
    <li className="item">
      <input
        className="item-checkbox"
        type="checkbox"
        id={id}
        checked={isCompleted}
        onChange={() => dispatch(todoActions.toggle({ id }))}
      />
      <label className="item-checkbox-label" htmlFor={id} />
      <div className={itemContentsStyle}>{contents}</div>
      <button
        className="item-button"
        onClick={() => dispatch(todoActions.delete({ id }))}
      >
        X
      </button>
    </li>
  );
};
