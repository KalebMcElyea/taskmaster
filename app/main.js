import TaskController from "./Controllers/TaskController.js";
import ValuesController from "./Controllers/ValuesController.js";
import { loadState } from "./Utils/LocalStorage.js";
import TodoController from"./Controllers/TodoController.js"

class App {
  valuesController = new ValuesController();
  taskController = new TaskController();

  todoController = new TodoController();
}

window["app"] = new App();
loadState()

