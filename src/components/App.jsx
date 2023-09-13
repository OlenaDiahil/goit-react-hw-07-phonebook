import React, { useEffect } from 'react';
import ContactList from './ContactList';
import { ContactsForm } from './ContactsForm';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList />
    </div>
  );
};
