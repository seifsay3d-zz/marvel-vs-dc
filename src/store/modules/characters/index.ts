import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const store = {
  state: {
    list: [],
    character: {},
    match: []
  },
  actions,
  getters,
  mutations
};

export default store;
