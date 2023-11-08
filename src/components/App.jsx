import { useSelector } from 'react-redux';
import { getContacts } from 'components/redux/selectors';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Container } from './App.styled';

// localStorage.clear(); //! Очистка `localStorage` в браузері

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length !== 0 && <Filter />}
        <ContactList />
      </Section>
    </Container>
  );
};
