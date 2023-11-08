import { createSlice, nanoid } from '@reduxjs/toolkit';

const INITIAL_STATE = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            id: nanoid(),
            number: number,
          },
        };
      },
    },

    deleteContact(state, action) {
      // state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      return state.filter(contact => contact.id !== action.payload);
    },

    // state.contacts = state.contacts.filter(
    //   contact => contact.id !== action.payload
    // );
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
