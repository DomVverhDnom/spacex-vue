import Vue from "vue";
import store from "./store";
import VueRouter from "vue-router";
import App from "./App.vue";
import Normalize from "../src/assets/normalize.css";
import Features from "./components/Features";
import Calendar from "./components/Calendar";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/features",
    component: Features,
  },
  {
    path: "/",
    default: Calendar,
    component: Calendar,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  store,
  router,
  render: (h) => h(App, Normalize),
}).$mount("#app");
