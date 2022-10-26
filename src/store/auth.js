import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      isAuth: false,
      id: undefined,
      user: {
        name: undefined,
        email: undefined,
      },
    };
  },
  actions: {
    login(email, password, id, name) {
      this.id = id;
      this.isAuth = true;
      this.user.email = email;
      this.user.password = password;
    },
    logout() {
      this.isAuth = false;
      this.user.email = "";
      this.user.password = "";
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "auth",
        storage: localStorage,
      },
    ],
  },
});
