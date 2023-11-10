import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { contactsReducer2 } from './contactsReducer2';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    contactsStore: contactsReducer2,
  },
});
