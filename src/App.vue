<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/layout/Header.vue";
import Component from "vue-class-component";

@Component({
  components: {
    AppHeader
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~normalize.css";
@import "~@/assets/scss/vars.scss";
@import url("https://fonts.googleapis.com/css?family=Noto+Sans");

body {
  font-family: "Noto Sans", sans-serif;
  background: #333333;
}

.button {
  display: inline-block;
  cursor: pointer;
  background: $primary;
  padding: 10px 25px;
  border-radius: 5px;
  border: 0px;
  text-decoration: none;
  color: black;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;

  &:hover {
    background: darken($primary, 5%);
  }
  &--danger {
    background: $danger;
    color: $white;

    &:hover {
      background: darken($danger, 5%);
    }
  }

  &--has-checkbox {
    input {
      display: none;
    }
  }

  &--is-fullwidth {
    padding: 10px 0px;
    width: 100%;
  }
}
</style>
