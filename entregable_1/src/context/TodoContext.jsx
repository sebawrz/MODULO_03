import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState([1, 2, 3, 4]);

    const addTask = (text) => {
        const newTask = { text };
        setTasks([...tasks], newTask);
    }

    const deleteAll = () => {
        setTasks(null);
    }

    return (
        <TodoContext.Provider value={{ tasks, addTask, deleteAll }}>
            {children}
        </TodoContext.Provider>
    )

}

export const useTodo = () => {
    const context = useContext(TodoContext);
    return context;
}

export default TodoContext;