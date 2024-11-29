import styled from 'styled-components';
import { useState } from 'react';
import { useRef } from 'react';

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 620px) {
        flex-direction: column;
    }
`;

const Input = styled.input`
    flex-grow: 1;
    color: grey;
    background-color: #fff;
    border: 1px solid #b5b5b5;
    border-radius: 5px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;

    &:focus-visible {
        border: 1px dashed #b5b5b5;
        outline: none;
    }

    @media (max-width: 620px) {
        width: 100%;
    }
`;

const Button = styled.button`
    cursor: pointer;  
    color: white;
    background-color: #287af9;
    border-radius: 5px;
    border: 1px solid #287af9;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    transition: all 0.25s;

     &:hover {
        background-color: #79abf9;
    }

    @media (max-width: 620px) {
        width: 100%;
    }
`;

const Pre = styled.pre`
    display: flex;
    flex-wrap: wrap;
    font-size: 0.75rem;
`;


const NewTaskForm = () => {
    const [error, setError] = useState(null);
    const input = useRef(null);
    const submitTask = (e) => {
        e.preventDefault();
        let task = String(input.current.value).trim();
        if (task.length < 5) {
            return setError("El nombre de la tarea debe ser superior a 5 letras");
        } else {
            input.current.value;
            return setError(null);
        }
    }

    return (
        <>
            <Form onSubmit={submitTask}>
                <Input type='text' placeholder='¿Que tarea desea agregar?' ref={input} />
                <Button type='submit'>Agregar</Button>
            </Form >
            {error && <Pre>{error}</Pre>}
        </>
    )
}

export default NewTaskForm;