import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  counter,
  todos,
  visibilityFilter
});

export default todoApp;
