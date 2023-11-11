import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Container } from './App.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts !== null && contacts.length !== 0 && <Filter />}
        <ContactList />
      </Section>
    </Container>
  );
};
