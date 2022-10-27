import { defineStore } from "pinia";
import { newTask, getTasks, updateTask, deleteTask } from "../API/index";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      tasks: [],
    };
  },
  actions: {
    async setTask() {
      const response = await getTasks();
      this.tasks = await response;
    },
    updateTask(id) {
      const findIndex = this.tasks.filter((elem) => {
        return elem.id === id;
      });
    },
    deleteTask(id) {
      const findIndex = this.tasks.findIndex((elem) => {
        return elem.id === id;
      });
      return this.tasks.splice(findIndex, 1);
    },
    async addTask(task) {
      const response = await getTasks();
      this.tasks = await response;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "task",
        storage: localStorage,
      },
    ],
  },
});
