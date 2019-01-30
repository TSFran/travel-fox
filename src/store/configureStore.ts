import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { users } from '@app/src/state/User/reducers';
const reduxDevTool =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
  const store = createStore(
    combineReducers({
      users
    }),
    compose(
      applyMiddleware(thunk),
      reduxDevTool
    )
  );
  return store;
};
