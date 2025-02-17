import React from "react";
import { Todo } from "../../electron/models/Todo";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  const handleCheckboxChange = async (id: string) => {
    try {
      await onToggle(id);
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckboxChange(todo.id)}
            className="todo-checkbox"
          />
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)} className="delete-button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
