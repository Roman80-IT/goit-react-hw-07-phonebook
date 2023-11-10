import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import { Input, Button } from './ContactForm.styled';
import { fetchContacts } from 'redux/contactsReducer2';

export const ContactForm = () => {
  const dispatch = useDispatch();

  //! Отримаємо всі контакти з АПІ
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  // const name = useSelector(state => state.contactsOperation.name);

  const isNameHas = name => {
    return contacts.some(contact => contact.name === name);
  };

  const handleChange = ({ name, value }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  //submit form

  const handleSubmit = event => {
    event.preventDefault();

    if (isNameHas(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));

    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={name}
          placeholder="Enter name"
          onChange={event => handleChange(event.target)}
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          required
          placeholder="Enter number (123-45-67)"
          value={number}
          onChange={event => handleChange(event.target)}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
