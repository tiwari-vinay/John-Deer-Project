import {Todo} from '../models/todo.js';
import { fileService } from './fileService.js';

export const todoService = {
    getTodos(): Todo[] {
        return fileService.readTodos();
    },
    addTodo(todo: Todo): Todo[]{        
        if(!todo.id || !todo.text){
            throw new Error('Invalid Todo');
        }
        const todos = fileService.readTodos();
        todos.push(todo);
        fileService.writeTodos(todos);
        console.log("successfully added todo with id ", todo.id);
        return todos;
    }, 
    deleteTodo(id: string): Todo[]{
        let todos = fileService.readTodos(); 
        todos = todos.filter(todo=> todo.id !== id);
        fileService.writeTodos(todos);
        console.log("successfully deleted todo with id ", id);
        return todos;
    }, 
    toggleTodo(id: string): Todo[]{
        const todos = fileService.readTodos();
        const index = todos.findIndex(todo=> todo.id === id);;
        if (index === -1)
            throw new Error('Todo not fount');
        todos[index].completed = !todos[index].completed;
        console.log("successfully toggled todo with id ", id);
        return todos;
    }

}