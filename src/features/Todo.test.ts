import { counterActions, counterReducer, Filter, ITodo } from "./Todo";

const prevState: ITodo = {
  items: [],
  currentFilter: Filter.ALL
};

test("should add new item", () => {
  // When
  const contents = "testtest";
  const createdTime = new Date().getTime();

  // Given
  const result = counterReducer(
    prevState,
    counterActions.add({
      contents,
      createdTime
    })
  );

  // Then
  const expected = prevState.items.concat({
    id: `item_${createdTime}`,
    contents,
    createdTime,
    isCompleted: false
  });
  expect(result.items).toEqual(expected);
});
