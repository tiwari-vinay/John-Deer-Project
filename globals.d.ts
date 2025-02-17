import { Todo } from "./src/electron/models/todo";

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
