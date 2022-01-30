<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
// import Login from "./components/Login.vue";
import Navbar from "./components/Navbar.vue";
import { mapActions } from "vuex";
import axios from "axios";

export default {
  name: "App",
  components: { Navbar },
  methods: {
    ...mapActions(["setUser"]),
  },
  async beforeCreate() {
    try {
      let response = await axios.get("/api/users/adminCheck", {
        headers: { authorization: localStorage.getItem("token") },
      });
      this.setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
#app .nav-item a {
  color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
