<template>
  <router-link
    class="match"
    :to="{
      name: 'match',
      params: {
        first: match.first.character.id,
        second: match.second.character.id
      }
    }"
  >
    <character-side-thumb
      class="match__character"
      :character="match.first.character"
    >
      <div class="match__votes">Votes: {{ match.first.votes }}</div>
    </character-side-thumb>

    <span class="match__sign">vs</span>
    <character-side-thumb
      class="match__character"
      :character="match.second.character"
    >
      <div class="match__votes">Votes: {{ match.second.votes }}</div>
    </character-side-thumb>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CharacterSideThumb from "@/components/character/CharacterSideThumb.vue";
@Component({
  components: {
    CharacterSideThumb
  },
  props: {
    match: {
      type: Object,
      required: true
    }
  }
})
export default class MatchThumb extends Vue {}
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/vars.scss";
.match {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  margin-top: 25px;
  text-decoration: none;
  color: black;
  border-radius: 5px;
  background: $secondary;
  color: $white;
  padding: 20px;

  &:hover {
    background: $gray;
    transition: all 0.8s;
  }
  &__character {
    display: flex;
    flex-basis: 33%;
    width: 33%;
    align-items: center;
  }

  &__sign {
    flex-grow: 1;
    text-align: center;
    color: $primary;
  }
}
</style>
