<template>
  <div class="character">
    <div class="character__image">
      <img :src="character.image">
    </div>
    <div class="character__content">
      <div class="character__name">{{ character.name }}</div>
      <div class="character_text">{{ character.description }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    character: {
      type: Object,
      required: true
    }
  }
})
export default class CharacterSideThumb extends Vue {}
</script>

<style lang="scss" scoped>
.character {
  display: flex;

  &__image {
    width: 20%;
    margin-right: 10px;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
