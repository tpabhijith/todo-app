import React, { useEffect, useState } from "react";
import "./todos.scss";
import TodoInput from "../todoInput/TodoInput";
import TodoList from "../todoList/TodoList";

const Todos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("data")));
    }, []);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    }, [data]);

    const handleDelete = (id) => {
        let updatedData = data.filter((data) => data.id != id);
        setData(updatedData);
    };

    const handleComplete = (id) => {
        const index = data.findIndex((item) => item.id === id);

        if (index !== -1) {
            const updatedData = [...data];
            updatedData[index].isCompleted = !updatedData[index].isCompleted;
            setData(updatedData);
        }
    };

    //----------------------------------------
    const [todo, setTodo] = useState("");

    // useEffect(() => {
    //     setData(JSON.parse(localStorage.getItem("data")));
    // }, []);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleAdd = () => {
        if (todo.trim() !== "") {
            const newTodo = {
                id: Date.now(), // Using timestamp as a unique id (you can use a better approach for production)
                todo: todo,
                isCompleted: false,
            };

            const updatedData = [...data, newTodo];
            setData(updatedData);
            setTodo(""); // Clear input field after adding todo

            // Update localStorage
            localStorage.setItem("data", JSON.stringify(updatedData));
        }
    };
    return (
        <div className="todoWrapper">
            <TodoInput
                handleChange={handleChange}
                handleAdd={handleAdd}
                todo={todo}
            />
            <TodoList
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                data={data}
            />
        </div>
    );
};

export default Todos;
