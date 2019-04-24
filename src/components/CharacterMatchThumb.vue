<template>
  <router-link
    class="match"
    :to="{
      name: 'match',
      params: {
        first: match.first.id,
        second: match.second.id
      }
    }"
  >
    <div class="match__character">
      <character-side-thumb :character="match.first"></character-side-thumb>
    </div>

    <span class="match__sign">vs</span>
    <div class="match__character">
      <character-side-thumb :character="match.second"></character-side-thumb>
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
  justify-content: space-between;
  align-items: center;

  margin-top: 25px;
  text-decoration: none;
  color: black;

  &__character {
    flex-grow: 1;
    width: 30%;
  }

  &__sign {
    flex-grow: 1;
    text-align: center;
  }
}
</style>
