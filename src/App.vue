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
</style>
