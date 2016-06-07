import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    console.warn('selector');
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
    }
  }
)
