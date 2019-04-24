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
@import url("https://fonts.googleapis.com/css?family=Noto+Sans");

body {
  font-family: "Noto Sans", sans-serif;
}

.button {
  display: inline-block;
  background: #ffc500;
  padding: 10px 25px;
  border-radius: 5px;
  border: 0px;
  text-decoration: none;
  color: black;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;

  &--has-checkbox {
    input {
      display: none;
    }
  }

  &--is-full-width {
    padding: 10px 0px;
    width: 100%;
  }
}
</style>
