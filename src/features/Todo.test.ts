import { Filter, ITodo, todoActions, todoReducer, todoSelectors } from "./Todo";

// reducers
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

// selectors
describe("visibileItems", () => {
  const item = {
    id: "1",
    contents: "test",
    createdTime: 1,
    isCompleted: false
  };
  const item2 = {
    ...item,
    id: "2"
  };
  const doneItem = {
    ...item,
    isCompleted: true
  };

  test("should return items when filter is DONE", () => {
    // Given
    const state: ITodo = {
      items: [item, doneItem, item2],
      currentFilter: Filter.DONE
    };

    // When
    const result = todoSelectors.visibleItems(state);

    // Then
    expect(result).toEqual([doneItem]);
  });

  test("should return items when filter is DONE", () => {
    // Given
    const state: ITodo = {
      items: [item, doneItem, item2],
      currentFilter: Filter.ALL
    };

    // When
    const result = todoSelectors.visibleItems(state);

    // Then
    expect(result).toEqual([item, item2, doneItem]);
  });
});
