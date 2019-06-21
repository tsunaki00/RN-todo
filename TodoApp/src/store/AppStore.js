import { createStore, combineReducers, applyMiddleware  } from 'redux';
import reduxThunk from 'redux-thunk';

/* import reducers start */
import TodoDetailReducer from '../pages/todo/detail/TodoDetailReducer'
import TodoEntryReducer from '../pages/todo/entry/TodoEntryReducer'
import TodoIndexReducer from '../pages/todo/index/TodoIndexReducer'
/* import reducers end */


const middlewares = [
  reduxThunk
];

export function configureStore(initialState = {}) {  
  const store = createStore(reducers, initialState);
  return store;
};
const AppStore = createStore(
  combineReducers({ 
    /* reducers start */
    TodoDetail : TodoDetailReducer
    ,TodoEntry : TodoEntryReducer
    ,TodoIndex : TodoIndexReducer
    /* reducers end */

  }),
  applyMiddleware(...middlewares)
);

export default AppStore;