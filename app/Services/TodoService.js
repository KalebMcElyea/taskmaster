import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { saveState } from "../Utils/LocalStorage.js";


class TodoService{
    constructor() {
     ProxyState.on('todo', saveState)
 }
    create(newTodo)
    {
        ProxyState.todo = [new Todo(newTodo), ...ProxyState.todo]
       
    }
    
    delete(todoId) {
        ProxyState.todo = ProxyState.todo.filter(t=> t.id != todoId)

    }
}

export const todoService = new TodoService()