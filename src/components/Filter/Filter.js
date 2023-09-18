import { useDispatch } from 'react-redux';
import {filterChanges } from 'redux/filterSlice';

export const Filter = ({ searchInputId }) => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterChanges(value));
  };

  return (
    <div>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        onChange={changeFilter}
        id={searchInputId}
      />
    </div>
  );
};
