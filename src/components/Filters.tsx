import "./Filters.scss";

import classnames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "@/features";
import { Filter, TODO, todoActions, todoSelectors } from "@/features/Todo";
import { useTouchStyle } from "@/hooks/useTouchStyle";

export const Filters = () => {
  return (
    <section className="filters">
      {Object.values(Filter).map((filter: Filter, index: number) => {
        return <FilterButton key={`filter_button_${index}`} filter={filter} />;
      })}
    </section>
  );
};

interface IFilterButton {
  filter: Filter
}

const FilterButton = (props: IFilterButton) => {
  const { filter } = props
  const dispatch = useDispatch();
  const currentFilter = useSelector<IRootState, Filter>(state =>
    todoSelectors.filter(state[TODO])
  );
  const filterButtonStyle = classnames("filters-button", {
    "filters-button--active": filter === currentFilter
  });
  const touchStyleProps = useTouchStyle(filterButtonStyle, "filters-button--selected")

  return (
    <button
      {...touchStyleProps}
      onClick={() =>
        dispatch(todoActions.changeFilter({ filter }))
      }
    >
      {filter}
    </button>
  )
}