import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import DeleteAll from './components/DeleteAll'
import styled from 'styled-components'
import { useTodo } from './context/TodoContext'
import { useState } from 'react'

const Wrapper = styled.main`
    width: 600px;
    background-color: #f9f9f9;
    border-radius: 0.5rem;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.2);

    @media (max-width: 620px) {
      width: 90%;
      min-width: 360px;
`;

const App = () => {
  return (
    <Wrapper>
      <h1>Nuctasks</h1>
      <NewTaskForm />
      <TaskList />
      <DeleteAll />
    </Wrapper>
  )
}

export default App
