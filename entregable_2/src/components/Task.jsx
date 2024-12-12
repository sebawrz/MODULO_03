import styled from 'styled-components';
import { useTodo } from '../context/TodoContext'

const Item = styled.li`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
list-style: none;
padding: 0.6rem 0rem 0.6rem 0rem;
gap: 1rem;
text-align: start;

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

const Task = (props) => {
    const { deleteTask } = useTodo();

    return (
        <Item>
            <p>{props.task.name}</p>
            <Button id={props.task.id} onClick={() => deleteTask(props.task.id)} >Eliminar</Button>
        </Item >)
}

export default Task;