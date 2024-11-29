import { useState } from 'react'
import './App.css'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import DeleteAll from './components/DeleteAll'

const App = () => {

  return (
    <>
      <h1>Nuctasks</h1>
      <NewTaskForm />
      <TaskList />
      <DeleteAll />
    </>
  )
}

export default App
