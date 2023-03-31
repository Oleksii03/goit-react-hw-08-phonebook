import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Heading = styled.h2`
  display: block;
  font-size: 72px;
  text-align: center;
  color: #000;
`;

export const Text = styled.p`
  display: block;
  font-size: 40px;
  text-align: center;
  color: #000;
`;

export const UserLink = styled(Link)`
  padding: 15px;
  display: block;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  color: #d5cea3;
  background-color: #008000;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #000;
    background-color: #90EE90;
  }
`;

export const LogOutButton = styled.button`
  padding: 15px;
  display: block;
  min-width: 300px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  font-size: 30px;
  color: #d5cea3;
  background-color: #008000;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #3c2a21;
    background-color: #d5cea3;
  }
`;
