import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  height: 100px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const Info = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;

export const ButtonDelete = styled.button`
  width: 70px;
  height: 40px;
  margin-left: 5px;
  border-width: inherit;
  border-radius: 5px;
  outline: none;
  background-color: #e22626;
  color: white;
  cursor: pointer;

  &:focus {
    background-color: #c72323;
  }
`;
