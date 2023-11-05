import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from './ContactForm.styled';
import { getContacts, getName, getNumber } from 'components/redux/selectors';
import {
  addContact,
  addName,
  addNumber,
  resetForm,
} from 'components/redux/contactsOperationReducer';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // const name = useSelector(state => state.contactsOperation.name);
  const name = useSelector(getName);
  const number = useSelector(getNumber);

  //set state on input change
  const onChangeInput = event => {
    if (event.target.name === 'name') dispatch(addName(event.target.value));
    if (event.target.name === 'number') dispatch(addNumber(event.target.value));
  };

  //submit form
  const handleSubmit = event => {
    event.preventDefault();
    // const form = event.target;
    const newContact = { name, number };
    // form.reset();

    const isNameHas = name => {
      return contacts.some(contact => contact.name === name);
    };

    if (isNameHas(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));

    dispatch(resetForm());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zAЗа-яА-Я]*)*$"
          required
          value={name}
          placeholder="Enter name"
          onChange={onChangeInput} // Встановити ім'я в Redux-стейт
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
          value={number}
          placeholder="Enter number (123-45-67)"
          onChange={onChangeInput} // Встановити номер в Redux-стейт
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
