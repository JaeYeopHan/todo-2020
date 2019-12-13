import React from "react";

interface IFiltersProps {}

export const Filters = (props: IFiltersProps) => {
  return (
    <section>
      <button>All</button>
      <button>Active</button>
      <button>Done</button>
    </section>
  );
};
