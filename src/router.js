import LandingPage from "./components/LandingPage.vue";
import Users from "./components/Users.vue";
import IncomingOrders from "./components/IncomingOrders.vue";
import Order from "./components/Order.vue";
import Pizzas from "./components/Pizzas.vue";
import UserProfile from "./components/UserProfile.vue";
import Categories from "./components/Categories.vue";

const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/pizzas",
    component: Pizzas,
  },
  {
    path: "/orders",
    component: IncomingOrders,
  },
  {
    path: "/categories",
    component: Categories,
  },
  {
    path: "/users/:username",
    component: UserProfile,
  },
  {
    path: "/order/:id",
    component: Order,
  },
  {
    path: "/*",
    component: LandingPage,
  },
];

export default routes;
