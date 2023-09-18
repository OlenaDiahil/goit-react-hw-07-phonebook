import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
    </div>
  );
};
