import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from 'redux/operations';
import { selectContactsItems } from 'redux/selectors';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContactsItems);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const contact = {id: nanoid(), name, number };
    const normalizedFind = name.toLocaleLowerCase();
    items.find(contact => contact.name.toLocaleLowerCase() === normalizedFind)
      ? Notiflix.Notify.warning(`${name} is already in contacts!`)
      : dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
