<template>
  <mdc-nav>
    <mdc-nav-li>
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/logo.png" />
      </router-link>
    </mdc-nav-li>
    <mdc-nav-li>
      <router-link :to="{ name: 'characters' }">Characters</router-link>
    </mdc-nav-li>
    <mdc-nav-li>
      <router-link :to="{ name: 'matches' }">Matches</router-link>
    </mdc-nav-li>
    <mdc-nav-li flexGrow="2">
      <character-search></character-search>
    </mdc-nav-li>
  </mdc-nav>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import MDCNav from "@/components/user-interface/mdc-nav";
import MDCNavLi from "@/components/user-interface/mdc-nav-li";

import CharacterSearch from "@/components/CharacterSearch.vue";

@Component({
  components: {
    "mdc-nav": MDCNav,
    "mdc-nav-li": MDCNavLi,
    CharacterSearch
  }
})
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped></style>
