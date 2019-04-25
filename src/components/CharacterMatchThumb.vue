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
    <div class="match__character">
      <character-side-thumb
        :character="match.first.character"
      ></character-side-thumb>
      <div class="match__votes">{{ match.first.votes }}</div>
    </div>

    <span class="match__sign">vs</span>
    <div class="match__character">
      <character-side-thumb
        :character="match.second.character"
      ></character-side-thumb>
      <div class="match__votes">{{ match.second.votes }}</div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CharacterSideThumb from "@/components/CharacterSideThumb.vue";
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
export default class ChracterMatchThumb extends Vue {}
</script>
<style lang="scss" scoped>
.match {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  margin-top: 25px;
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
    background: black;
    transition: all 0.8s;
  }
  &__character {
    display: flex;
    flex-basis: 33%;
    width: 33%;
    align-items: center;
  }

  &__votes {
    font-size: 27px;
    margin-left: 15px;
  }

  &__sign {
    flex-grow: 1;
    text-align: center;
  }
}
</style>
