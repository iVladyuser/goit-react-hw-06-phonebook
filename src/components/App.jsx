import { ContactForm, ContactList, Filter } from 'components';

const App = () => {
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
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
