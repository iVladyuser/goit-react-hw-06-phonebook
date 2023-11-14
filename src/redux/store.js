import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";

import {contactsReducer} from './contacts/contacts.reducer'

const rootReducer = combineReducers({
    contactsStore: contactsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);



