<template>
  <div>
    <home-slider></home-slider>
    <strongest-characters></strongest-characters>
    <strongest-characters></strongest-characters>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import StrongestCharacters from "@/components/character/StrongestCharacters.vue";
import HomeSlider from "@/components/home/HomeSlider.vue";
@Component({
  components: {
    HomeSlider,
    StrongestCharacters
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
