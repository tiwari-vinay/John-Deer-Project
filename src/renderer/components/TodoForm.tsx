import React, { useState } from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Todo text cannot be empty");
      return;
    }

    onAdd(text.trim());
    setText("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (error) setError("");
        }}
        className={`todo-input ${error ? "error" : ""}`}
        placeholder="What needs to be done?"
      />
      <button type="submit" className="todo-button" disabled={!text.trim()}>
        Add Todo
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default TodoForm;
