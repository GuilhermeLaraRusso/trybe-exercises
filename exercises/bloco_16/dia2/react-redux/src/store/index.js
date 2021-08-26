import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  movies: movieReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
