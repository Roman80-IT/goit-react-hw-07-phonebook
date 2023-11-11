import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer2 } from './contactsReducer2';

export const store = configureStore({
  reducer: {
    contactsStore: contactsReducer2,
  },
});
