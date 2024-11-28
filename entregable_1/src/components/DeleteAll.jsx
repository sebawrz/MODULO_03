import styled from 'styled-components';
import { useState } from 'react';
import { useRef } from 'react';

const Button = styled.button`
width: 100%;
cursor: pointer;  
color: white;
background-color: red;
border-radius: 5px;
border: 1px solid red;
padding: 0.75rem;
font-size: 0.75rem;
font-weight: 500;
transition: all 0.25s;

 &:hover {
  background-color: #ff6b6b;
}
`;

const DeleteAll = () => {
  return <Button>Borrar todas</Button>
}

export default DeleteAll;

