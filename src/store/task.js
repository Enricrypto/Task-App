import { slotFlagsText } from "@vue/shared";
import { defineStore } from "pinia";
import { newTask, getTasks, updateTask, deleteTask } from "../API/index";

export const useTaskStore = defineStore("task", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      // Guardaremos los task que nos de supabase
      tasks: [],
    };
  },
  actions: {
    async setTask() {
      const response = await getTasks()
      this.tasks = await response
    },
    updateTask(id, task) {
      // TODO modificar el estado de la task
      const findIndex = this.tasks.findIndex((elem) => {
        return elem.id === id
        
      }) 
      // Encontrar el indice de la task con ese id y cambiar su contenido con task
    },

    deleteTask(id) {
      // TODO modificar el estado borrando esa task
      const findIndex = this.tasks.findIndex((elem) => {
        return elem.id === id
      }) 
      return this.tasks.splice(findIndex, 1)
      // Encontramos el indice de ese id y eliminamos ese indice de la array
    },

    async addTask(task) {
      // TODO modificar el estado de task haciendo un push de la task
      //this.tasks.push(task);
      const response = await getTasks()
      this.tasks = await response
      // Comprobar que tenemos el id al insertar el registro, en caso de no tenerlo tendriamos que hacer el getTask
    },
  },
  persist: {
    // Nos activa la persistencia del store
    enabled: true,
    strategies: [
      {
        // Key del store
        key: "task",
        // donde guarda el store
        storage: localStorage,
      },
    ],
  },
});
