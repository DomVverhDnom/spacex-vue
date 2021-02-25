import Vue from "vue";
import Vuex from "vuex";
import rockets from "./modules/rockets";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    rockets: {
      namespaced: true,
      ...rockets,
    },
  },
});
