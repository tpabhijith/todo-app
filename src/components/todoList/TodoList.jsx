import React from "react";
import Todo from "../todo/Todo";
import "./todoList.scss";

const TodoList = ({ handleComplete, handleDelete, data }) => {
    return (
        <div className="todoListWrapper">
            <h3>Todo List</h3>
            <Todo
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                data={data}
            />
        </div>
    );
};

export default TodoList;
