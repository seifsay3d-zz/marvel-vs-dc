import Vue from "vue";
import Router from "vue-router";
import Characters from "./views/Characters/CharactersList.vue";
import Matches from "./views/Characters/CharacterMatches.vue";
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
      path: "/characters/:id",
      name: "character",
      component: () => import("./views/Characters/CharacterView.vue")
    },
    {
      path: "/match/:first/:second",
      name: "match",
      component: () => import("./views/Characters/CharacterChallenge.vue")
    },
    {
      path: "/matches",
      name: "matches",
      component: () => import("./views/Characters/CharacterMatches.vue")
    }
  ]
});
