import { generateId } from "../Utils/GenerateId.js";

export default class Todo {
    constructor({ title, checkmark ,id = generateId(), taskId })
    {
        this.title = title
        this.id = id
        this.taskId = taskId
        this.checkmark = checkmark
       
    }

    get Template() {
        return /* html */`
        <div class="col-12">
        <div class="row m-1 p-2">
        <h5 class="col-10 ${this.title.includes('DONT FORGET') ? 'text-danger' : '  '}">${this.title}
        <button type="button" class="text-danger close col-2" minlength:3 maxlength:50
                onclick="app.todoController.delete('${this.id}')"><span>&times;</span></button> </h5>
                <input type="checkbox" name="checkboxes" id="myCheck" onclick="" class="m-2"${this.checkmark}>
                
            </div>
            
        </div>
       
        `
    }
}