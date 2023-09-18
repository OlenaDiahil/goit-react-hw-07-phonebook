import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { deleteContact } from 'redux/operations';
import { selectContacts } from 'redux/contactSlice';
import { selectFilterContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilterContacts);
  const handleDelete = id => dispatch(deleteContact(id));

  if (isLoading && !error) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Ooops!!! Something went wrong!</p>
        <p>Error:{error}</p>
      </div>
    );
  }

  let arrayContacts = [];
  if (filter === '') {
    arrayContacts = items;
  } else {
    const normalizedFilter = filter.toLocaleLowerCase();
    arrayContacts = items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <div>
      <ul>
        {arrayContacts.map(({ id, name, number }) => (
          <li key={id}>
             {name}: {number}
            <button
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
