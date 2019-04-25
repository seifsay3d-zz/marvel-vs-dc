import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/characters",
      name: "characters",
      component: () => import("./views/Characters/CharactersList.vue")
    },
    {
      path: "/characters/:id",
      name: "character",
      component: () => import("./views/Characters/CharacterView.vue")
    },
    {
      path: "/matches/:first/:second",
      name: "match",
      component: () => import("./views/Characters/CharacterMatch.vue")
    },
    {
      path: "/matches",
      name: "matches",
      component: () => import("./views/Characters/CharacterMatches.vue")
    }
  ]
});
