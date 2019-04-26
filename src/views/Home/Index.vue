<template>
  <div>
    <home-slider></home-slider>
    <character-grouped-by-power type="strongest"></character-grouped-by-power>
    <character-grouped-by-power type="weakest"></character-grouped-by-power>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CharacterGroupedByPower from "@/components/character/CharacterGroupedByPower.vue";
import HomeSlider from "@/components/home/HomeSlider.vue";

@Component({
  components: {
    HomeSlider,
    CharacterGroupedByPower
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
