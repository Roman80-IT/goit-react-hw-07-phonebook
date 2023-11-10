import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'http://654bc0fd5b38a59f28efa864.mockapi.io/',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/contacts/fetchAll');
  return data;
};

// export const addContact = async newContact => {
//   const { data } = await contactsInstance.post(
//     '/contacts/addContact',
//     newContact
//   );
//   return data;
// };

// export const deleteContact = async contactId => {
//   const { data } = await contactsInstance.delete(
//     `/contacts/${contactId}`
//   );
//   return data;
// };
