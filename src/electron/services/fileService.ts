import fs from "fs";
import path from "path";
import { Todo } from "../models/todo.js";
// import { fileURLToPath } from "url";
import { app } from "electron";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const filePath = path.join(app.getAppPath(), "TODOS.json");
console.log(filePath);

export const fileService = {
  readTodos(): Todo[] {
    try {
      if (!fs.existsSync(filePath)) return [];
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading todos", error);
      return [];
    }
  },

  writeTodos(todos: Todo[]): void {
    try {
      fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");
      console.log("Todos written successfully");
    } catch (error) {
      console.error("Error in writing todos", error);
    }
  },
};
