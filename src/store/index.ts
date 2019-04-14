import Vue from "vue";
import Vuex from "vuex";
import characters from "@/store/modules/characters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    characters
  }
});

export default store;
