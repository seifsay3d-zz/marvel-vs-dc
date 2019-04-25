<template>
  <div class="character-votable">
    <div class="character-votable__thumb">
      <character-thumb :character="character"></character-thumb>
    </div>
    <div class="character-votable__button">
      <button class="button" @click="vote">Vote</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CharacterThumb from "@/components/CharacterThumb.vue";

@Component({
  components: {
    CharacterThumb
  },
  props: {
    character: {
      type: Object,
      requried: true
    }
  }
})
export default class CharacterVotable extends Vue {
  vote() {
    this.$emit("winner", this.character.id);
  }
}
</script>
