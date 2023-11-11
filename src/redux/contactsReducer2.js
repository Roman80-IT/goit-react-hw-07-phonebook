import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestAddContact, requestContacts } from 'services/api';

//! Санки:
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // Параметр не передаємо, так як ми отримуємо всі контакти з API
  async (_, thunkAPI) => {
    try {
      const contacts = await requestContacts();
      console.log('contacts in Санка: ', contacts);

      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); //
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',

  async (newContact, thunkAPI) => {
    try {
      const contact = await requestAddContact(newContact);
      console.log('AddContact in Санка: ', contact);

      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); //
    }
  }
);

//    'contacts/deleteContact';

const INITIAL_STATE = {
  contacts: {
    items: null,
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })

      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.unshift(action.payload);
        // state.contacts.items = [action.payload, ...state.items];
        // state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      }),
});
// state.contacts
export const contactsReducer2 = contactsSlice.reducer;
