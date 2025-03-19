const AddTask = ({ newTodo, setNewTodo, addTodo, editTodo }) => {
    return (
      <div className="add-task-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="add-input"
        />
        <button onClick={addTodo} className="add-btn">
          {editTodo ? "✏️ Update" : "Add Task"}
        </button>
      </div>
    );
  };
  
  export default AddTask;
  