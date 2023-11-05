import { setFilter } from 'components/redux/contactsOperationReducer';
import { getFilter } from 'components/redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  // const filter = useSelector(state => state.contactsOperation.filter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
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
