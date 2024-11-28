import styled from 'styled-components';
import { useState } from 'react';
import { useRef } from 'react';

const Item = styled.li`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
list-style: none;
padding: 0.6rem 0rem 0.6rem 0rem;

&:not(:last-of-type) {
      border-bottom: 1px solid #dfdfdf;
    }
`;

const Button = styled.button`
cursor: pointer;  
color: white;
background-color: red;
border-radius: 5px;
border: 1px solid red;
padding: 0.6em 0.6em;
font-size: 0.75rem;
font-weight: 500;
transition: all 0.25s;

 &:hover {
  background-color: #ff6b6b;
}
`;


const Task = () => {
    return (
        <>
            <Item><p>Tarea 1</p><Button>Eliminar</Button> </Item>
            <Item><p>Tarea 1</p><Button>Eliminar</Button> </Item>
            <Item><p>Tarea 1</p><Button>Eliminar</Button> </Item>

            <Item><p>Tarea 1</p><Button>Eliminar</Button> </Item>

        </>
    )
}

export default Task;