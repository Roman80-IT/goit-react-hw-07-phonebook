import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsIsLoading,
  selectContactsError,
  selectContactsFilterTerm,
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
  const filterTerm = useSelector(selectContactsFilterTerm);

  // const filteredContacts = getFilteredContacts(contacts, filter);

  //! Отримаємо всі контакти з АПІ
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // console.log('contacts in ContactList: ', contacts);

  const filteredContacts =
    contacts !== null &&
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterTerm.toLowerCase().trim())
    );

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <ul>
        {filteredContacts &&
          filteredContacts.map(({ id, name, phone }) => {
            return (
              <li key={id}>
                <Contact id={id} name={name} phone={phone} />
              </li>
            );
          })}
      </ul>
    </>
  );
};
