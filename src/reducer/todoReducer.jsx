const initialState = {
  todos: [
    {
      id: 1,
      item: "Build Other React Apps",
      completed: false,
    },
    {
      id: 2,
      item: "Complete Internship Tasks",
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "todos/deleteTodo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "todos/completeTodo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "todos/updateTodo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, item: action.payload.item }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
