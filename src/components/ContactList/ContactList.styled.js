import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
margin: 20px;
flex-direction: column;
gap: 10px;
`;

export const ContactItem = styled.li`
max-width: 400px;
  padding: 20px;
  background: white;
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.05);
  }`;
