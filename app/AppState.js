import Task from "./Models/Task.js"
import Value from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Todo from "./Models/Todo.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /**@type {Task[]} */
  task =[]

/**@type {Todo[]} */
  todo =[]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
