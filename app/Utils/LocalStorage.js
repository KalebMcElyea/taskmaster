import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import Todo from "../Models/Todo.js";


export function saveState() {
    localStorage.setItem('taskmaster', JSON.stringify({
        task: ProxyState.task,
        todo: ProxyState.todo,
        
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskmaster'))
    if (data) {
        ProxyState.task = data.task.map(oldTask => new Task(oldTask))
         ProxyState.todo = data.todo.map(t=> new Todo(t))


    }
     
    
}