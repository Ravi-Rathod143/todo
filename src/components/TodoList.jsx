import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleComplete, deleteTodo, startEdit }) => {
  return (
    <div className="task-container">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            startEdit={startEdit}
          />
        ))
      ) : (
        <p className="no-tasks">No tasks found!</p>
      )}
    </div>
  );
};

export default ToDoList;
