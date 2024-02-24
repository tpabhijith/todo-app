import React, { useEffect, useState } from "react";
import "./todoInput.scss";

const TodoInput = ({ handleChange, handleAdd, todo }) => {
    return (
        <div className="todoInputWrapper">
            <div className="inputWrapper">
                <input onChange={(e) => handleChange(e)} value={todo} />
            </div>
            <button className="btn" onClick={() => handleAdd()}>
                Add
            </button>
        </div>
    );
};

export default TodoInput;
