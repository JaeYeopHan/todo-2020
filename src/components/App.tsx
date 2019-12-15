import React from "react";
import { useSelector } from "react-redux";

import { Header } from "@/components/shared/Header";
import { ListContainer } from "@/components/shared/ListContainer";
import { Main } from "@/components/shared/Main";
import { IRootState } from "@/features";
import { IItem, TODO, todoSelectors } from "@/features/Todo";

import { Filters } from "./Filters";
import { Input } from "./Input";
import { Item } from "./Item";
import { Toast } from "./shared/Toast";

export default () => {
  const result = useSelector<IRootState, IItem[]>(state =>
    todoSelectors.visibleItems(state[TODO])
  );

  return (
    <Main>
      <Header>Todo</Header>
      <Input />
      <ListContainer>
        {result.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ListContainer>
      <Filters />
      <Toast>Error</Toast>
    </Main>
  );
};
