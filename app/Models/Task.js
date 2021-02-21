import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"

export default class Task{
    constructor({title, color, Tcolor, id = generateId()}) {
        this.title = title
        this.id = id
        this.color = color
        this.Tcolor = Tcolor
    }
    
    

    get Template() {

        return /*html*/` 
        <div class="col-3 border rounded shadow-lg p-4 m-1" style="color :${this.color}">
            <h1>${this.title}<button class="text-danger close mt-3 p-3" onclick="app.taskController.delete('${this.id}')"><span>&times;</span></button> </h1>
            <h5>To do's</h5>
            <form onsubmit="app.todoController.create(event, '${this.id}')">
                <div class="form-group">
                    <input type="text" name="title" placeholder="Enter topping title..." maxlength ="50" minlength="3">
                    <button type="submit" class = "btn-secondary btn-info rounded">Add To do</button>
                    <div class="row">
                    ${this.Todo}
                    </div>
                </div>
            </form>
        </div>
`
        
    }

    get Todo() {
        let template = ''
        let todo = ProxyState.todo.filter(t => t.taskId == this.id)
        todo.forEach(t => template += t.Template)
        return template
    }
}