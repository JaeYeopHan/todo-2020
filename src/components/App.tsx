import React from "react";
import { useSelector } from "react-redux";

import { ListContainer } from "@/components/shared/ListContainer";
import { Main } from "@/components/shared/Main";
import { IRootState } from "@/features";
import { IItem, TODO, todoSelectors } from "@/features/Todo";

import { Item } from "./Item";

export default () => {
  const result = useSelector<IRootState, IItem[]>(state =>
    todoSelectors.visibleItems(state[TODO])
  );

  return (
    <Main>
      <h1>Todo</h1>
      <ListContainer>
        {result.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ListContainer>
    </Main>
  );
};
