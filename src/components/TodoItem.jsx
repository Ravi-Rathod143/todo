const ToDoItem = ({ todo, toggleComplete, deleteTodo, startEdit }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span>{todo.text}</span>
      <div className="flex gap-3">
      <button onClick={() => toggleComplete(todo.id)} className="mark">
          {todo.completed ? "✔" : "Mark as done"}
        </button>

        <button onClick={() => startEdit(todo)} className="edit-btn">✏️</button>
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">❌</button>
      </div>
    </div>
  );
};

export default ToDoItem;
