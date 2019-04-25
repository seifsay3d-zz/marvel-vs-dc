import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import DcContainer from "./components/styled/container";
import DcHeader from "./components/styled/header";
import DcNav from "@/components/styled/nav";
import DcNavLi from "@/components/styled/nav-li";

Vue.component("dc-container", DcContainer);
Vue.component("dc-header", DcHeader);
Vue.component("dc-nav", DcNav);
Vue.component("dc-nav-li", DcNavLi);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
