import React from "react";
import "./todo.scss";

const Todo = ({ handleComplete, handleDelete, data }) => {
    return (
        <div>
            {data.map((todo) => (
                <div className="todoContainer" key={todo.id}>
                    <span
                        className={todo.isCompleted ? "completed" : "complete"}
                    >
                        {todo.todo}
                    </span>
                    <div>
                        <button
                            onClick={() => handleComplete(todo.id)}
                            className={
                                todo.isCompleted ? "completed" : "complete"
                            }
                        >
                            {todo.isCompleted ? "Completed" : "Complete"}
                        </button>
                        <button
                            className="delete"
                            onClick={() => handleDelete(todo.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Todo;
