import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  border: 3px solid #008000;
  border-radius: 50px 10px 50px 10px;
  padding: 20px 50px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
  align-items: center;
  gap: 30px;
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  display: block;
  font-family: inherit;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  background-color: #008000;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #000;
    background-color: #3CB371;
  }
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  padding: 10px 15px;
  font-family: inherit;
  font-size: 25px;
  color: #000;
  background-color: #3CB371;
  border: none;
  outline: none;
  border-radius: 10px;
`;

export const PasswordInput = styled.input`
  display: block;
  width: 300px;
  padding: 10px 15px;
  font-family: auto;
  font-size: 25px;
  color: #3c2a21;
  background-color: #3CB371;
  border: none;
  outline: none;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  font-size: 25px;
`;

export const Title = styled.span`
  text-align: center;
  padding: 50px;
  display: block;
  margin-bottom: 10px;
  font-size: 45px;
  color: #1a120b;
`;

export const BackLink = styled(Link)`
  // position: absolute;
  // top: 20px;
  // right: 20px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  max-width: 150px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-size: 15px;
  color: #fff;
  background-color: #008000;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #000;
    background-color: #3CB371;
  }
`;