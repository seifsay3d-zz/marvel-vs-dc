<template>
  <mdc-nav>
    <mdc-nav-li>
      <img src="@/assets/logo.png">
    </mdc-nav-li>
    <mdc-nav-li>
      <router-link :to="{ name: 'characters' }">Characters</router-link>
    </mdc-nav-li>
    <mdc-nav-li>
      <router-link :to="{ name: 'matches' }">Matches</router-link>
    </mdc-nav-li>
    <mdc-nav-li flexGrow="2">
      <mdc-input width="50%" placeholder="Search"></mdc-input>
    </mdc-nav-li>
    <mdc-nav-li>User</mdc-nav-li>
  </mdc-nav>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import MDCNav from "@/components/user-interface/mdc-nav";
import MDCNavLi from "@/components/user-interface/mdc-nav-li";
import MDCInput from "@/components/user-interface/mdc-input";

@Component({
  components: {
    "mdc-nav": MDCNav,
    "mdc-nav-li": MDCNavLi,
    "mdc-input": MDCInput
  }
})
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped></style>
