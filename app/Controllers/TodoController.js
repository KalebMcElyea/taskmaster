import { todoService} from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

export default class TodoController{

    constructor() {
    }

    create(event, taskId,) {
    event.preventDefault()        
        let form = event.target
        let newTodo = {
            title: form.title.value,
            taskId: taskId,
        }
        debugger
    todoService.create(newTodo)  
        
    }

     
    

    delete(todoId) {
        todoService.delete(todoId)
        let r = confirm("Are you sure you want to delete this to do?!");
        if (r ==true) {
        } else {
          
        }
        
    }
}