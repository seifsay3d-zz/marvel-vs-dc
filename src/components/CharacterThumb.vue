<template>
  <div class="character">
    <img
      class="character__image"
      src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png"
    >
    <div class="character__description">
      <h1 class="character__header">{{ character.name }}</h1>
      <p class="character__parahraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        dolorem dolor inventore asperiores iure voluptatibus, omnis laboriosam
        natus sapiente placeat.
      </p>
    </div>
    <div class="chracter__buttons">
      <ul class="character__actions">
        <li>
          <router-link
            class="button button--is-full-width"
            :to="{
              name: 'character',
              params: {
                id: character.id
              }
            }"
          >Show</router-link>
        </li>
        <li>
          <label class="button button--is-full-width button--has-checkbox">
            <input type="checkbox" v-model="isSelected" @change="$emit('change', character)">
            {{ status }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SThumb from "@/components/shared/character-thumbs.ts";
import { Character } from "@/types";

const options = Vue.extend({
  props: {
    character: {
      type: Object,
      required: true,
      default: null
    }
  }
});

@Component<CharacterThumb>({
  components: {
    SThumb
  },
  computed: {
    status() {
      return !this.isSelected ? "Choose" : "Return";
    }
  }
})
export default class CharacterThumb extends options {
  isSelected = false;
}
</script>
<style lang="scss" scoped>
$white: #fff;
.selected {
  background: red;
}

.character {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 23%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 40px 10px 10px 10px;
  margin: 10px 0;
  &__image {
    width: 100%;
  }
  &__description {
    text-align: center;
  }
  &__actions {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;

    li {
      flex-grow: 1;
      flex-basis: 50%;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
}
</style>
