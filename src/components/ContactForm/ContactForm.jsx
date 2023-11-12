import React, { useState } from 'react';
import { FormInput, Form, FormButton, FormLabel } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactSchema = {
      name,
      number: Number.parseFloat(number) || alert(`Number is not correct`),
    };
    onSubmit(contactSchema);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput
        type="text"
        name="name"
        onChange={handleInputChange}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />

      <FormLabel htmlFor="number">Number</FormLabel>
      <FormInput
        type="tel"
        name="number"
        value={number}
        onChange={handleInputChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
      />

      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};

export default ContactForm;
