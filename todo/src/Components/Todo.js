import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

const Todo = () => {
  // const [todo, setTodo] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);

  const [newTodoText, setNewTodoText] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = e => {
    setNewTodoText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.todo}{" "}
          <i
            onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="todo-input"
            type="text"
            name="newTodoText"
            value={newTodoText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_TODO", payload: newTodoText });
            }}
          >
            Update todo
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
