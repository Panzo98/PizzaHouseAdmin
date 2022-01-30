<template>
  <b-navbar class="nav-container" variant="dark" toggleable="lg" type="dark">
    <b-navbar-brand class="nav-brand" @click="$router.push('/')"
      >Pizza House</b-navbar-brand
    >

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto nav-btn" v-if="user.loggedIn">
        <!-- Using 'button-content' slot -->
        <b-nav-item @click="changeRoute('/users')" right>
          <b-nav-text> USERS</b-nav-text>
        </b-nav-item>
        <b-nav-item @click="changeRoute('/pizzas')" right>
          <b-nav-text> PIZZAS</b-nav-text>
        </b-nav-item>
        <b-nav-item @click="changeRoute('/orders')" right>
          <b-nav-text> ORDERS</b-nav-text>
        </b-nav-item>
        <b-nav-item @click="changeRoute('/categories')" right>
          <b-nav-text> CATEGORIES</b-nav-text>
        </b-nav-item>
        <b-nav-item right>
          <!-- ovde dodati ako je korisnik ulogovan, vuex -->
          <b-nav-text @click="handleLogout"> LOGOUT</b-nav-text>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Navbar",
  methods: {
    ...mapActions(["logoutUser"]),
    handleLogout() {
      this.logoutUser();
      this.$router.push("/");
    },
    changeRoute(route) {
      this.$router.push(route);
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
.nav-container {
  background-color: #f73e2b !important;
  min-height: 76px;
}
.nav-brand {
  margin-left: 20px;
  font-size: 40px;
  font-family: "Forte";
  cursor: pointer;
}
.nav-btn {
  padding-right: 20px;
  color: white;
}
</style>
