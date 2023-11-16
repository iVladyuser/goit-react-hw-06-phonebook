import { createSlice } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 1, name: 'Silvia Weber', number: '0076 397–70–42' },
  { id: 2, name: 'Alberto Meier', number: '0079 202-75-94' },
];

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? initialContacts,
};

const phoneBookSlice = createSlice({
  // Name of slice
  name: 'contacts',
  // Initial state of reducer of slice
  initialState,
  // Object redusers
  reducers: {
    addContact(state, action) {
      //   state.contacts = [...state.contacts, action.payload];
      state.contacts.push(action.payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

// To generate action-creators
export const { addContact, deleteContact} = phoneBookSlice.actions;
// Reducer of slice
export const contactsReducer = phoneBookSlice.reducer;


// REDUX

// const initialState = {
//   contacts: JSON.parse(localStorage.getItem('contacts')) ?? initialContacts,
// };

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//         return {
//           ...state,
//           contacts: [...state.contacts, action.payload], // ✅
//         };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };
