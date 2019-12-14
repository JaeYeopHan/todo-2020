import "./Filters.scss";

import classnames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "@/features";
import { Filter, TODO, todoActions, todoSelectors } from "@/features/Todo";

export const Filters = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector<IRootState, Filter>(state =>
    todoSelectors.filter(state[TODO])
  );
  const filterButtonStyle = (val: Filter) =>
    classnames("filter-button", {
      "filter-button--active": val === currentFilter
    });

  return (
    <section className="filters">
      {Object.values(Filter).map((value: Filter, index: number) => {
        return (
          <button
            className={filterButtonStyle(value)}
            key={`filter_button_${index}`}
            onClick={() =>
              dispatch(todoActions.changeFilter({ filter: value }))
            }
          >
            {value}
          </button>
        );
      })}
    </section>
  );
};
