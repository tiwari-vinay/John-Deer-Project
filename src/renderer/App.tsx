import React, { useEffect, useState } from "react";
import "./App.css";
import { Todo } from "../electron/models/Todo";
import { addTodos, deleteTodo, getTodos, toggleTodo } from "./utils/ipc";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Description from "./components/Description";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, []);

  const handleToggle = async (id: string) => {
    try {
      await toggleTodo(id);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  return (
    <div className="container">
      <Description />
      <h1>Todo List</h1>
      <TodoForm
        onAdd={async (text) => {
          const newTodo = { id: Date.now().toString(), text, completed: false };
          const updatedTodos = await addTodos(newTodo);
          setTodos(updatedTodos);
        }}
      />
      <TodoList
        todos={todos}
        onDelete={async (id) => {
          const updatedTodos = await deleteTodo(id);
          setTodos(updatedTodos);
        }}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;
