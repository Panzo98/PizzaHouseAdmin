import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import routes from "./router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
