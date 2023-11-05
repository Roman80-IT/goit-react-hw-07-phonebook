import { createSlice, nanoid } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contacts: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

const contactsSlice = createSlice({
  name: 'contactsOperation',

  initialState: INITIAL_STATE,
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },

    addNumber(state, action) {
      state.number = action.payload;
    },

    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
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
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      // return state.filter(contact => contact.id !== action.payload);
    },

    setFilter(state, action) {
      state.filter = action.payload;
      // return (state = action.payload);
    },

    resetForm(state) {
      state.name = '';
      state.number = '';
    },
  },
});

export const {
  addName,
  addNumber,
  addContact,
  deleteContact,
  setFilter,
  resetForm,
} = contactsSlice.actions;
export const contactsOperationReducer = contactsSlice.reducer;
