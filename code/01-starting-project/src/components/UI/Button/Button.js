import React from 'react';
import styled, {css} from 'styled-components';
import './Button.css';

const SubmitButton = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: ${props => props.isValid ? 'pointer' : 'not-allowed'};

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
  
  ${props => {
    if (props.isValid) {
      return css`
        color: green;
      `
    } else {
      return `color: red`
    }
  }}
`;

const Button = props => {

  return (
    <SubmitButton onClick={props.onClickz} primary={props.primary} isValid={props.isValid}>
      {props.children}
    </SubmitButton>
  );

};

export default Button;
