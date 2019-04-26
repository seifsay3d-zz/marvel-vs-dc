<template>
  <div :class="['character', { 'character--is-selected': isSelected }]">
    <img class="character__image" :src="character.image" />
    <div class="character__description">
      <h1>{{ character.name }}</h1>
      <p>{{ character.description }}</p>
      <slot name="content"></slot>
    </div>
    <div class="chracter__buttons">
      <ul class="character__actions">
        <li>
          <router-link
            class="button button--is-fullwidth"
            :to="{
              name: 'character',
              params: {
                id: character.id
              }
            }"
            >Show</router-link
          >
        </li>
        <li v-if="isSelectable">
          <label class="button button--is-fullwidth button--has-checkbox">
            <input
              type="checkbox"
              v-model="localSelection"
              @change="$emit('change', character)"
            />
            {{ status }}
          </label>
        </li>
        <slot name="actions"></slot>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
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
  components: {},
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
@import "~@/assets/scss/vars.scss";
@import "~@/assets/scss/animations.scss";

.character {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background: $secondary;
  color: $white;
  border-radius: 5px;
  padding: 40px 10px 10px 10px;
  margin-bottom: 20px;
  transition: all 0.5s;

  &:hover &__image {
    animation: shake-head 1s infinite;
  }

  &__image {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    height: auto;
  }

  &__description {
    text-align: center;
    min-height: 190px;
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
      &:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  }

  &--is-selected {
    background: $gray;
    color: white;
    transition: all 0.5s;
  }
}
</style>
