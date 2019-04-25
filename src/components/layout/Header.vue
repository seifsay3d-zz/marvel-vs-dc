<template>
  <dc-nav>
    <dc-nav-li>
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/logo.png" />
      </router-link>
    </dc-nav-li>
    <dc-nav-li>
      <router-link :to="{ name: 'characters' }">Characters</router-link>
    </dc-nav-li>
    <dc-nav-li>
      <router-link :to="{ name: 'matches' }">Matches</router-link>
    </dc-nav-li>
    <dc-nav-li flexGrow="2">
      <character-search></character-search>
    </dc-nav-li>
  </dc-nav>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

import CharacterSearch from "@/components/character/CharacterSearch.vue";

@Component({
  components: {
    CharacterSearch
  }
})
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped></style>
