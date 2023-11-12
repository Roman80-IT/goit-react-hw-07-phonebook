import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsReducer2';

import { FaTimes } from 'react-icons/fa';
import { Button, Item } from './Contact.styled';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      {name}: {phone}
      <Button type="button" onClick={handleDelete} title={`Delete ${name}`}>
        <FaTimes />
      </Button>
    </Item>
  );
};
