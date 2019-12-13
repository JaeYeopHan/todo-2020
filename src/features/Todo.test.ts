import { Filter, ITodo, todoActions, todoReducer } from "./Todo";

test("should add a new item", () => {
  // When
  const prevState: ITodo = {
    items: [],
    currentFilter: Filter.ALL
  };
  const contents = "testtest";
  const createdTime = new Date().getTime();

  // Given
  const result = todoReducer(
    prevState,
    todoActions.add({
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

test("should delete the item", () => {
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
  const result = todoReducer(
    prevState,
    todoActions.delete({
      id: `item_${createdTime}`
    })
  );

  // Then
  expect(result.items).toEqual([]);
});

test("should toggle isCompleted status of the item", () => {
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
  const result = todoReducer(
    prevState,
    todoActions.toggle({
      id: `item_${createdTime}`
    })
  );

  // Then
  expect(result.items).toEqual([
    {
      ...item,
      isCompleted: true
    }
  ]);
});

test("should chnage filter", () => {
  // Given
  const prevState: ITodo = {
    items: [],
    currentFilter: Filter.ALL
  };
  const newFilter = Filter.DONE;

  // When
  const result = todoReducer(
    prevState,
    todoActions.changeFilter({ filter: newFilter })
  );

  // Then
  expect(result.currentFilter).toEqual(newFilter);
});
