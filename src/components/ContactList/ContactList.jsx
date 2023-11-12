import React from 'react';
import { List, ContactItem } from './ContactList.styled';
import ContactCard from '../ContactCard/ContactCard';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
<List>
      {contacts.map( contact => (
        <ContactItem key={contact.id}>
          <ContactCard contact={contact} onDeleteContact={onDeleteContact} />  
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
