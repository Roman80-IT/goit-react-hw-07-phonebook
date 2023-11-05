import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  // const [filter, setFilter] = useState('');
  const filter = useSelector(state => state.contactsOperation.filter);
  const contacts = useSelector(state => state.contactsOperation.contacts);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   const data = JSON.parse(localStorage.getItem('list-contacts'));
  //   if (data) {
  //     return [...data];
  //   } else {
  //     return [
  //       { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  //       { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  //       { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  //     ];
  //   }
  // });

  // useEffect(() => {
  //   localStorage.setItem('list-contacts', JSON.stringify(contacts));
  // }, [contacts]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('list-contacts'));
    if (data) {
      dispatch({ type: 'contactsOperation/setContacts', payload: data });
    }
  }, [dispatch]);

  const isNameHas = name => {
    return contacts.some(contact => contact.name === name);
  };

  // const onSubmit = data => {
  //   data.id = nanoid();
  //   setContacts(prev => {
  //     return [...prev, { ...data }];
  //   });
  // };
  const onSubmit = data => {
    data.id = nanoid();
    dispatch({
      type: 'contactsOperation/setContacts',
      payload: [...contacts, data],
    });
  };

  // const onDelete = id => {
  //   const data = contacts.filter(contact => contact.id !== id);
  //   setContacts([...data]);
  // };

  const onDelete = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    dispatch({
      type: 'contactsOperation/setContacts',
      payload: updatedContacts,
    });
  };

  // const filterContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // filter contacts by name
  // const onInputChangeFilter = e => {
  //   dispatch(setFilter(e.target.value.trim()));
  // };

  // Оновимо фільтр при зміні вводу користувача
  const handleFilterChange = event => {
    dispatch({
      type: 'contactsOperation/setFilter',
      payload: event.target.value.trim(),
    });
  };

  // filtered contacts by name
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={onSubmit} isNameHas={isNameHas} />
      </Section>

      <Section title="Contacts">
        {contacts.length !== 0 && (
          <Filter filter={filter} onChange={handleFilterChange} />
        )}
        <ContactList contacts={filteredContacts} onDelete={onDelete} />
      </Section>
    </Container>
  );
};
