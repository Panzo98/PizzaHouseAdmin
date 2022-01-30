<template>
  <div v-if="user.loggedIn">
    <HomePage />
  </div>
  <div v-else><Login /></div>
</template>

<script>
import HomePage from "./HomePage.vue";
import Login from "./Login.vue";
import { mapGetters } from "vuex";
export default {
  name: "LandingPage",
  components: {
    HomePage,
    Login,
  },
  computed: { ...mapGetters(["user"]) },
  created() {
    console.log(this.user);
  },
};
</script>
