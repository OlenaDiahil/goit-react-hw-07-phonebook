import React from 'react';
import ContactList from './ContactList';
import { ContactsForm } from './ContactsForm';
import Filter from './Filter';

export const App = () => {
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
