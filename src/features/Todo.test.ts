import { counterActions, counterReducer, Filter, ITodo } from "./Todo";

test("should add a new item", () => {
  // When
  const prevState: ITodo = {
    items: [],
    currentFilter: Filter.ALL
  };
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

test("should delete a item", () => {
  // When
  const createdTime = new Date().getTime();
  const item = {
    id: `item_${createdTime}`,
    contents: "testtest",
    createdTime,
    isCompleted: false
  };
  const prevState: ITodo = {
    items: [item],
    currentFilter: Filter.ALL
  };

  // Given
  const result = counterReducer(
    prevState,
    counterActions.delete({
      id: `item_${createdTime}`
    })
  );

  // Then
  expect(result.items).toEqual([]);
});
