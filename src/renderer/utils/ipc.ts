import { Todo } from "../../electron/models/Todo";

declare global {
  interface Window {
    api: {
      getTodos: () => Promise<Todo[]>;
      addTodo: (todo: Todo) => Promise<Todo[]>;
      toggleTodo: (id: string) => Promise<Todo[]>;
      deleteTodo: (id: string) => Promise<Todo[]>;
    };
  }
}

export const getTodos = async (): Promise<Todo[]> =>
  await window.api.getTodos();
export const addTodos = async (todo: Todo): Promise<Todo[]> =>
  await window.api.addTodo(todo);
export const toggleTodo = async (id: string): Promise<Todo[]> =>
  await window.api.toggleTodo(id);
export const deleteTodo = async (id: string): Promise<Todo[]> =>
  await window.api.deleteTodo(id);