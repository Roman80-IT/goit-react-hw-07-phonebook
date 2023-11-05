import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';  // вже не потрібна окремо

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
  // Ім'я слайсу
  name: 'contactsOperation',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },

    addNumber(state, action) {
      state.number = action.payload;
    },

    addContact: {
      // state.contacts.push(action.payload);
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

// case 'contactsOperation/resetForm': {
//       return {
//         ...state,
//         name: '', // Нове поле
//         number: '', // Нове поле
//       };

/////////////////////////////////////////////////////

// setIsLoading(state, action) {
//   state.isLoading = action.payload;
// },
// setPostDetails(state, action) {
//   state.postDetailsData = action.payload;
// },
// setError(state, action) {
//   state.error = action.payload;
// },
// addPost(state, action) {
//   // state.posts.push(action.payload);
//   state.posts = [...state.posts, action.payload];
// },
// deletePost(state, action) {
//   state.posts = state.posts.filter(post => post.id !== action.payload);
// const deletePostIndex = state.posts.findIndex(post => post.id === action.payload);
// state.posts.splice(deletePostIndex, 1);
// },

// export const contactsOperationReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case `contactsOperation/setContacts`: {
//       return {
//         ...state,
//         contacts: action.payload,
//       };
//     }
//     case `contactsOperation/setFilter`: {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     case 'contactsOperation/addContact': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case 'contactsOperation/deleteContact': {
//       // action.payload - 1
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case 'contactsOperation/resetForm': {
//       return {
//         ...state,
//         name: '', // Нове поле
//         number: '', // Нове поле
//       };
//     }

//     default:
//       return state;
//   }
// };
