import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ToDoList from "./components/TodoList";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);

 const addTodo = () => {
  if (newTodo.trim()) {
    if (editTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === editTodo.id ? { ...todo, text: newTodo } : todo
        )
      );
      setEditTodo(null);
    } else {
      const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
      setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
    }
    setNewTodo("");
  }
};

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (todo) => {
    setNewTodo(todo.text);
    setEditTodo(todo);
  };

  return (
    <div className="todo-container">
      <Header />
      <AddTask newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} editTodo={editTodo} />
      <ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} startEdit={startEdit} />
    </div>
  );
};

export default App;
