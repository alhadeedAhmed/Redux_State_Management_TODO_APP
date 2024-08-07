import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const NewInput = ({
  currentTodo,
  handleAlert,
  handleError,
  handleCompleteError,
  clearCurrentTodo,
}) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTodo) {
      setTodo(currentTodo.item);
    } else {
      setTodo("");
    }
  }, [currentTodo]);

  const onInputTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      handleError();
      return;
    }
    if (currentTodo) {
      if (currentTodo.completed) {
        handleCompleteError();
      } else {
        updateTodo();
        clearCurrentTodo();
      }
    } else {
      addTodo();
      handleAlert();
    }
    setTodo("");
  };

  const addTodo = () => {
    dispatch({
      type: "todos/addTodo",
      payload: {
        id: Math.floor(Math.random() * 1000) + 1,
        item: todo,
        completed: false,
      },
    });
  };

  const updateTodo = () => {
    dispatch({
      type: "todos/updateTodo",
      payload: { id: currentTodo.id, item: todo },
    });
  };

  return (
    <div>
      <form className="todo_form_container" onSubmit={handleTodoSubmit}>
        <input
          className="todo_input"
          type="text"
          placeholder="Enter your todo"
          value={todo}
          onChange={onInputTodo}
        />
        <button className="todo_btn">
          {currentTodo ? "Update Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default NewInput;
