import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import Loader from './Loader';


const ContactList = () => {
  // const { contacts } = useSelector((state) => state.contacts);
  const { items, isLoading, error } = useSelector(state => state.contacts.contacts);
  const { searchQuery } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id))
  }
  // const getFilteredData = () => {
  //   return contacts.filter(el =>
  //     el.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // };
  // const filteredData = getFilteredData(contacts);
  
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
        <p>Ooops!!! Error:{error}</p>
      </div>
    );
  }

  let arrayContacts = [];
  if (searchQuery === '') {
    arrayContacts = items;
  } else {
    const normalizedFilter = searchQuery.toLocaleLowerCase();
    arrayContacts = items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <div>
        {arrayContacts.map(({ id, name, number }) => (
          <li key={id}>
             {name}: {number}
            <button
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </div>
  );
};

export default ContactList;
