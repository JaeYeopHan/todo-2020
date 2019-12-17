import React from "react";
import { useSelector } from "react-redux";

import { Header } from "@/components/shared/Header";
import { ListContainer } from "@/components/shared/ListContainer";
import { Main } from "@/components/shared/Main";
import { IRootState } from "@/features";
import { IItem, TODO, todoSelectors } from "@/features/Todo";
import { useRemount } from "@/hooks/useRemount";

import { Filters } from "./Filters";
import { Input } from "./Input";
import { Item } from "./Item";
import { Toast } from "./shared/Toast";

export default () => {
  const items = useSelector<IRootState, IItem[]>(state =>
    todoSelectors.visibleItems(state[TODO])
  );
  const [key, remount] = useRemount();

  return (
    <Main key={key}>
      <Header>Todo</Header>
      <Input />
      <ListContainer>
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ListContainer>
      <Filters />
      <Toast id={TODO} onClose={remount}>
        입력할 수 없는 특수문자를 입력했거나 올바르지 않은 입력입니다. 다시
        시도해주세요.
      </Toast>
    </Main>
  );
};
