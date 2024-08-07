import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewInput from "./components/NewInput";
import Alert from "./components/Alert";

const App = () => {
  const [currentTodo, setCurrentTodo] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [completeErrorVisible, setCompleteErrorVisible] = useState(false);
  const [taskCompleteAlertVisible, setTaskCompleteAlertVisible] =
    useState(false);

  const handleEdit = (todo) => {
    if (!todo.completed) {
      setCurrentTodo(todo);
    } else {
      handleCompleteError();
    }
  };

  const handleAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  const handleError = () => {
    setErrorVisible(true);
    setTimeout(() => {
      setErrorVisible(false);
    }, 3000);
  };

  const handleCompleteError = () => {
    setCompleteErrorVisible(true);
    setTimeout(() => {
      setCompleteErrorVisible(false);
    }, 3000);
  };

  const handleTaskCompleteAlert = () => {
    setTaskCompleteAlertVisible(true);
    setTimeout(() => {
      setTaskCompleteAlertVisible(false);
    }, 3000);
  };

  const clearCurrentTodo = () => {
    setCurrentTodo(null);
  };

  return (
    <div className="app-container">
      <header>
        <h1>To-Do App</h1>
        <p>Keep Track of Your Daily Goals</p>
      </header>
      {alertVisible && (
        <Alert type="success" message="Item added successfully!" />
      )}
      {errorVisible && (
        <Alert type="error" message="Please enter a todo item!" />
      )}
      {completeErrorVisible && (
        <Alert type="error" message="Completed items cannot be edited!" />
      )}
      {taskCompleteAlertVisible && (
        <Alert type="success" message="Task completed!" />
      )}
      <NewInput
        currentTodo={currentTodo}
        handleAlert={handleAlert}
        handleError={handleError}
        handleCompleteError={handleCompleteError}
        clearCurrentTodo={clearCurrentTodo}
      />
      <TodoList onEdit={handleEdit} onTaskComplete={handleTaskCompleteAlert} />
    </div>
  );
};

export default App;
