import Vue from "vue";
import Router from "vue-router";
import Characters from "./views/Characters/CharactersList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "characters",
      component: Characters
    },
    {
      path: "/:id",
      name: "character",
      component: () => import("./views/Characters/CharacterView.vue")
    }
  ]
});
