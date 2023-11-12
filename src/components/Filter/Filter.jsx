import { useDispatch, useSelector } from 'react-redux';
import { setFilterTerm } from 'redux/contactsReducer2';
import { selectContactsFilterTerm } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterTerm = useSelector(selectContactsFilterTerm);

  const handleFilterTerm = ({ target: { value } }) => {
    dispatch(setFilterTerm(value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filterTerm}
        onChange={handleFilterTerm}
      />
    </div>
  );
};
