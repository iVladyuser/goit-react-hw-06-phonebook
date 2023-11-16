import { nanoid } from 'nanoid';

import { ContactForm, ContactList, Filter } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts/phoneBookSlice';
import { filterContact } from 'redux/contacts/filterSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filterStore);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
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

    // const addContactAction = {
    //   type: 'contacts/addContact',
    //   payload: readyToAddContact,
    // };
    dispatch(addContact(readyToAddContact));
  };

  const changeFilter = value => {
    dispatch(filterContact(value));
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
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
