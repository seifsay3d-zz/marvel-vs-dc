<template>
  <div :class="['character', { 'character--is-selected': isSelected }]">
    <img class="character__image" :src="character.image">
    <div class="character__description">
      <h1 class="character__header">{{ character.name }}</h1>
      <p class="character__parahraph">{{ character.description }}</p>
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
        <li v-if="isSelectable">
          <label class="button button--is-full-width button--has-checkbox">
            <input type="checkbox" v-model="localSelection" @change="$emit('change', character)">
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
    },
    isSelectable: {
      type: Boolean,
      required: false,
      default: false
    },
    isSelected: {
      type: Boolean,
      required: false,
      default: false
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
  localSelection = this.isSelected;
}
</script>
<style lang="scss" scoped>
$white: #fff;

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
    flex-grow: 2;
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
      &:first-of-type:not(:only-of-type) {
        margin-right: 10px;
      }
    }
  }

  &--is-selected {
    background: #111;
    color: white;
    transition: all 0.5s;
  }
}
</style>
