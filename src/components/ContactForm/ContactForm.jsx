import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsReducer2';

import { Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const name = useSelector(state => state.contactsOperation.name);

  // const isNameHas = name => {
  //   return contacts.some(contact => contact.name === name);
  // };

  // const handleChange = ({ name, value }) => {
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setNumber(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  //!submit form1
  const handleAddContact = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.contactName.value;
    const phone = event.currentTarget.elements.contactNumber.value;

    const newContact = {
      name,
      phone,
    };

    dispatch(addContact(newContact));
    console.log('newContact: ', newContact);
    event.currentTarget.reset();
  };

  //!submit form2
  // const handleSubmit = event => {
  //   event.preventDefault();

  //   if (isNameHas(name)) {
  //     alert(`${name} is already in contacts.`);
  //     return;
  //   }

  //   dispatch(addContact(name, number));
  //   reset();
  // };

  return (
    <form onSubmit={handleAddContact}>
      <label>
        Name
        <Input
          type="text"
          name="contactName"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          // value={name}
          placeholder="Enter name"
          // onChange={event => handleChange(event.target)}
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="contactNumber"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          required
          placeholder="Enter number (123-45-67)"
          // value={number}
          // onChange={event => handleChange(event.target)}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
