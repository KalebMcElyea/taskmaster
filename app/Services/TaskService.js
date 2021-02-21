import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";


class TaskService{
    constructor() {
        ProxyState.on('task', saveState)
    }
 
    create(newTask)
    {
        ProxyState.task = [new Task(newTask), ...ProxyState.task]
    }
    
    delete(taskId) {
        let temp = ProxyState.task
        let taskIndex = temp.findIndex(t => t.id == taskId)
        temp.splice(taskIndex, 1)
        ProxyState.task = temp
        
        
        ProxyState.task = ProxyState.task.filter(t=> t.id != taskId)
        ProxyState.todo = ProxyState.todo.filter(t=> t.taskId != taskId)
        
    }
}

export const taskService = new TaskService ()