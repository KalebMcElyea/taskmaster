import { taskService } from "../Services/TaskService.js";
import { ProxyState } from "../AppState.js";


function _draw() {
    let taskElem = document.getElementById("task")
    let template = ""
    ProxyState.task.forEach(task=> template += task.Template)
    taskElem.innerHTML = template
    
}


export default class TaskController{

    constructor() {
        ProxyState.on("task", _draw)

    
        ProxyState.on("todo", _draw)
    }

    create(event) {
    event.preventDefault()   
        let form = event.target
        let newTask = {
            title: form.title.value,
            color: form.color.value,
            
        }
        taskService.create(newTask) 
        
      

        
        
    }

    delete(taskId) {
        taskService.delete(taskId)

        let r = confirm("Are you sure you want to delete this task!");
        if (r == true) {
        } else {
          
        }
    }
}