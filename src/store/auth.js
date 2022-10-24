import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      // Nos indicara si el usuario esta autenticado
      isAuth: false,
      // Guardaremos el id de supabase que nos dara al hacer el login
      id: undefined,
      user: {
        name: undefined,
        email: undefined,
      },
    };
  },
  actions: {
    login(email, password, id) {
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
    // Nos activa la persistencia del store
    enabled: true,
    strategies: [
      {
        // Key del store
        key: "auth",
        // donde guarda el store
        storage: localStorage,
      },
    ],
  },
});
