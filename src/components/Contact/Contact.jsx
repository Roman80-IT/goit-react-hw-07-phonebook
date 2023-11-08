import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { FaTimes } from 'react-icons/fa';

import { Button, Item } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={handleDelete} title={`Delete ${name}`}>
        <FaTimes />
      </Button>
    </Item>
  );
};
