import styled from "styled-components";
import React from 'react'

function Button({content}) {
  return (
    <StyledButton>{content}</StyledButton>
  )
}

const StyledButton = styled.button`
    background:var(--gradient-bar);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    &:hover{
      transform: scale(1.02);
      background:linear-gradient(90deg, rgba(255, 255, 0, 1) 0%, rgba(255, 59, 0, 1) 100%);
      transition: transform 200ms ease-in;
    }
`;


export default Button