import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  usersListReducer,
  addUserReducer,
  singleUserReducer,
  pageValueReducer,
  addUserErrorsReducer,
} from './reducers/usersListReducer';

const reducer = combineReducers({
  usersList: usersListReducer,
  addUser: addUserReducer,
  singleUser: singleUserReducer,
  pageValue: pageValueReducer,
  addUserErrors: addUserErrorsReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof reducer>;
export default store;
