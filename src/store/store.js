import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getPersistConfig } from 'redux-deep-persist';
import advertSlice from './createSlices/advert/advert';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  advert: advertSlice,
});

const persistConfig = getPersistConfig({
  key: 'root',
  storage,
  whitelist: ['advert.advertsActive'],
  rootReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
