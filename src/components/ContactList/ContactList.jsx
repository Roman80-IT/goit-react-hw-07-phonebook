import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  // getFilter,
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/contactsReducer2';
import { Loader } from 'components/Loader/Loader';
import { Contact } from 'components/Contact/Contact';
import ErrorMessage from 'components/ErrorMessage';

// const getFilteredContacts = (contacts, filter) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  // const filter = useSelector(getFilter);

  // const filteredContacts = getFilteredContacts(contacts, filter);

  //! Отримаємо всі контакти з АПІ
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log('contacts in ContactList: ', contacts);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <ul>
        {contacts !== null &&
          contacts.map(({ id, name, phone }) => {
            return (
              <li key={id}>
                <Contact id={id} name={name} number={phone} />
              </li>
            );
          })}
      </ul>
    </>
  );
};