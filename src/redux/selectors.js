import { createSelector } from 'reselect';

export const searchTextSelector = (state) => {
  return state.filters.search;
};

export const todoListSelector = (state) => {
  return state.todoList;
};

export const filterStatusTextSelector = (state) => {
  return state.filters.status;
};
export const filterPriorityTextSelector = (state) => {
  return state.filters.priorities;
};

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusTextSelector,
  filterPriorityTextSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priorities.lenght
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed)
      );
    });
  }
);
// export const todoListSelector = (state) => {
//   const SearchText = searchTextSelector(state);
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return todosRemaining;
// };

// export const searchTextSelector = (state) => {
//   return state.filters.search;
// };
