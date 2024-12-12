import styled from 'styled-components';
import { useTodo } from '../context/TodoContext';
import { useState } from 'react';

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
&:disabled{
  background-color: grey;
  border: 1px solid black;
  cursor: auto;  
}
`;

const DeleteAll = () => {
  const { tasks, deleteAll } = useTodo();
  let isDisabled
  if (tasks.length == 0) {
    isDisabled = true;
  } else {
    isDisabled = false;
  }
  const confirmDelete = () => {
    if (confirm("Está seguro que desea eliminar todas las tareas?")) {
      deleteAll();
    }
  }

  return <Button type="button" onClick={!isDisabled ? confirmDelete : () => console.log("no hay tareas")} disabled={isDisabled}>  Borrar todas</ Button >

}

export default DeleteAll;

