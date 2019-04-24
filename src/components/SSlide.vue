<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({})
export default class Slide extends Vue {}
</script>
<style lang="scss">
.slide {
  width: 100%;
  flex-shrink: 0;
}
</style>
