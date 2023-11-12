import React from 'react';
import { CardWrapper, ButtonDelete, Info } from './ContactCard.styled';

const ContactCard = ({ contact: { name, number, id }, onDeleteContact }) => {
  return (
    <CardWrapper>
      <Info>{name}</Info>
      <Info>{number}</Info>
      <ButtonDelete onClick={() => onDeleteContact(id)}>Delete</ButtonDelete>
    </CardWrapper>
  );
};

export default ContactCard;
