const initialContacts = [
  { id: 1, name: 'Silvia Weber', number: '0076 397–70–42' },
  { id: 2, name: 'Alberto Meier', number: '0079 202-75-94' },
];

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? initialContacts,
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
        return {
          ...state,
          contacts: [...state.contacts, action.payload], // ✅
        };
    }
    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
