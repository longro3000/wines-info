import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";

import { WineState } from './types';
import wineReducer from './reducers';
import rootSaga from './sagas';

const initialState: WineState = {
  wines: null,
  activeWine: null,
  has_more: true,
  last: ''
};

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWareEnhancer = applyMiddleware(sagaMiddleware);
  const store = createStore(
      wineReducer,
      initialState,
      composeWithDevTools(middleWareEnhancer)
  );
  sagaMiddleware.run(rootSaga);
  return store;
} 