import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { FaTimes } from 'react-icons/fa';
import { Button, Item } from './Contact.styled';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  // const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      {name}: {phone}
      <Button type="button" onClick={handleDelete(id)} title={`Delete ${name}`}>
        <FaTimes />
      </Button>
    </Item>
  );
};
