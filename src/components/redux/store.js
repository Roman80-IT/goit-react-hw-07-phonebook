import { configureStore } from '@reduxjs/toolkit';

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

import { contactsOperationReducer } from './contactsOperationReducer';

const contactsOperationConfig = {
  key: 'contactsOperation',
  storage,
  whitelist: ['contacts'],
  //   blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contactsOperation: persistReducer(
      contactsOperationConfig,
      contactsOperationReducer
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
