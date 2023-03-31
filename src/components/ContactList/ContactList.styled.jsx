import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 30px;
  color: #000;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Number = styled.span`
  font-size: 30px;
`;

export const Button = styled.button`
  padding: 10px;
  display: block;
  font-family: inherit;
  font-size: 15px;
  color: #fff;
  background-color: #008000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #000;
    background-color: #8FBC8F;
  }
`;