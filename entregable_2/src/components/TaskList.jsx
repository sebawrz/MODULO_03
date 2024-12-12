import styled from 'styled-components';
import Task from './Task';
import { useTodo } from '../context/TodoContext';

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
    const { tasks } = useTodo();
    return (
        <Lista>
            {tasks.map((task) => <Task key={task.id} task={task} />)}
            {tasks.length == 0 && <p>No tienes tareas</p>}
        </Lista>
    )
}

export default TaskList;