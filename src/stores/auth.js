// stores/auth.js
import { defineStore } from "pinia";
import axios from "@/api/config";
// import jwtDecode from "jwt-decode";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    token: localStorage.getItem("token") || null,
  }),
  actions: {
    async login(data) {
      try {
        const response = await axios.post("/login", data);
        // const decoded = jwtDecode(response.data.token);
        // this.user = decoded;
        this.token = response.data.token;
        localStorage.setItem("token", this.token);
        window.location.replace("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
    },
    checkAuth() {
      const token = localStorage.getItem("token");
      if (token) {
        this.token = token;
        // Fetch user details if necessary
      }
    },
  },
});
