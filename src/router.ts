import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Index.vue";
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
      component: () => import("./views/Matches/MatchView.vue")
    },
    {
      path: "/matches",
      name: "matches",
      component: () => import("./views/Matches/MatchList.vue")
    }
  ]
});
