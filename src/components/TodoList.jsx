import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ onEdit, onTaskComplete }) => {
  const selectTodos = (state) => state.todos;
  const returnedTodos = useSelector(selectTodos);

  return (
    <div>
      {returnedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onTaskComplete={onTaskComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
