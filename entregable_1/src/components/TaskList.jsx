import styled from 'styled-components';
import { useState } from 'react';
import { useRef } from 'react';
import Task from './Task';

const Lista = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
list-style: none;
padding: 1rem;
`;




const TaskList = () => {
    return (
        <>
            <Lista>
                <Task></Task>
            </Lista>
        </>
    )
}

export default TaskList;