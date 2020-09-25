import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import combineReducer from "Reducers/combineReducer";


function configureStore() {
  return createStore(
    combineReducer,
    applyMiddleware(thunkMiddleware)
  );
}

export default configureStore();