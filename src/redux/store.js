import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/phoneBookSlice';
import {filterReducer} from './contacts/filterSlice'

export const store = configureStore({
  reducer: {
    contactsStore: contactsReducer,
    filterStore: filterReducer,
  },
});
