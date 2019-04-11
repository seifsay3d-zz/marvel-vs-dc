import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const store = {
  state: {
    list: [{ id: 0, name: "ok" }],
    character: {}
  },
  actions,
  getters,
  mutations
};

export default store;
