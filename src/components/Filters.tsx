import React from "react";
import { useDispatch } from "react-redux";

import { Filter, todoActions } from "@/features/Todo";

export const Filters = () => {
  const dispatch = useDispatch();

  return (
    <section>
      <button
        onClick={() =>
          dispatch(todoActions.changeFilter({ filter: Filter.ALL }))
        }
      >
        All
      </button>
      <button
        onClick={() =>
          dispatch(todoActions.changeFilter({ filter: Filter.ACTIVE }))
        }
      >
        Active
      </button>
      <button
        onClick={() =>
          dispatch(todoActions.changeFilter({ filter: Filter.DONE }))
        }
      >
        Done
      </button>
    </section>
  );
};
