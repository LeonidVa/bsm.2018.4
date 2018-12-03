import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from '../redux';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export const persistor = persistStore(store);