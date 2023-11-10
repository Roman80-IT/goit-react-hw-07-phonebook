import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestContacts } from 'services/api';

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

//     '/contacts/addContact',
//    'contacts/deleteContact';

const INITIAL_STATE = {
  contacts: {
    items: [],
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
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
// state.contacts
export const contactsReducer2 = contactsSlice.reducer;
