import { useState, useEffect} from 'react';
import { nanoid } from 'nanoid';

import { ContactForm, ContactList, Filter } from 'components';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  console.log('contacts: ', contacts);
  // const [contacts, setContacts] = useState(() => {
  //   const stringifiedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(stringifiedContacts) ?? initialContacts;
  //   return parsedContacts;
  // });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    const deleteContactAction = {
      type: 'contacts/deleteContact',
      payload: contactId,
    };
    dispatch(deleteContactAction);
    // setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleAddContact = newContact => {
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`Oops, contact '${newContact.name}' is already in contacts!`);
      return;
    }
    const readyToAddContact = {
      ...newContact,
      id: nanoid(),
    };

    const addContactAction = {
      type: 'contacts/addContact',
      payload: readyToAddContact,
    };
    dispatch(addContactAction);

    // setContacts([...contacts, readyToAddContact])
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        margin: '0 auto',
        padding: '30px',
      }}
    >
      <h1 style={{ color: '#3645ab' }}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
