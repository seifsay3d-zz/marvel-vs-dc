import { CharactersState } from "@/types";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state: CharactersState = {
  list: [],
  character: null,
  match: null,
  matches: []
};

const store = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

export default store;
