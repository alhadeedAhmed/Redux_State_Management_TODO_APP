import React from "react";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo, onEdit, onTaskComplete }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch({
      type: "todos/deleteTodo",
      payload: id,
    });
  };

  const onComplete = (id) => {
    dispatch({
      type: "todos/completeTodo",
      payload: id,
    });
    onTaskComplete();
  };

  return (
    <div className={`todo ${todo.completed ? "todoCompleted" : ""}`}>
      <h3>{todo.item}</h3>
      <div>
        <button onClick={() => onEdit(todo)}>
          <i className="fa fa-edit"></i>
        </button>
        <button onClick={() => onComplete(todo.id)}>
          <i className="fa fa-check"></i>
        </button>
        <button onClick={() => onDelete(todo.id)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
