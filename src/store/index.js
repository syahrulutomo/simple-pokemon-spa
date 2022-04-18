import { createStore,combineReducers } from 'redux';
import { dataReducer } from './data/reducer';

const rootReducer = combineReducers({
  dataReducer,
});

export const store = createStore(
  rootReducer,
);