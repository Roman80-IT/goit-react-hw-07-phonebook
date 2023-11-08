import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  // const filter = useSelector(state => state.contactsOperation.filter);

  const handleFilterChange = event => {
    return dispatch(setFilter(event.target.value.trim()));
    // {
    // type: 'contactsOperation/setFilter',
    // payload: event.target.value.trim(),
    // }
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
