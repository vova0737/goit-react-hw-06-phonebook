import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phoneBookReducer from './phonebook/phonebook-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const phoneBookPersistConfig = {
  key: 'phoneBook',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    phoneBook: persistReducer(phoneBookPersistConfig, phoneBookReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const commonStore = {
  store,
  persistor,
};

export default commonStore;
