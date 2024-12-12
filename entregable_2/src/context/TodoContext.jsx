import { createContext, useContext, useState } from "react";

const TodoContext = createContext([]);

export const TodoProvider = ({ children }) => {

    const [tasks, setTasks] = useState([{ id: 1, name: "Entregable 1 HTML" }, { id: 2, name: "Entregable 2 HTML + CSS" }]);
    const [error, setError] = useState(null);
    const addTask = (text) => {
        const newTask = {};
        newTask.name = text;
        newTask.id = Date.now();
        if (newTask.name.length < 5) {
            return setError("El nombre de la nueva tarea debe tener minimo 5 caracteres");
        }
        else if (tasks.find(task => task.name === newTask.name)) {
            return setError('La tarea "' + newTask.name + '" ya existe');
        }
        else {
            setError(null);
            return setTasks( // Replace the state
                [ // with a new array
                    ...tasks, // that contains all the old items
                    newTask // and one new item at the end
                ]
            );
        }
    }

    const deleteAll = () => {
        setError(null);
        return setTasks([]);
    }

    const deleteTask = (id) => {
        setError(null);
        return setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <TodoContext.Provider value={{ tasks, addTask, deleteAll, deleteTask, error }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext);