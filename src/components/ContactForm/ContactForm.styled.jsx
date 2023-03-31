import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  border: 3px solid #008000;
  border-radius: 50px 10px 50px 10px;
  max-width:500px;
  padding: 50px 20px;
  margin: 0 auto;
`;

export const SubmitButton = styled.button`
  padding: 10px 30px;
  display: block;
  font-family: inherit;
  font-size: 20px;
  color: #000;
  background-color: #3CB371;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #008000;
  }
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  padding: 10px 15px;
  font-family: inherit;
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
`;

export const Title = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 35px;
  color: #1a120b;
`;