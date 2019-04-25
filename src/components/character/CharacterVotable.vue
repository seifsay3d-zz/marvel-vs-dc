<template>
  <div class="character-votable">
    <character-thumb :character="character">
      <template #content>
        <p>Recieved {{ votes }} votes</p>
      </template>
      <template #actions>
        <li>
          <button class="button button--is-fullwidth" @click="vote">
            Vote
          </button>
        </li>
      </template>
    </character-thumb>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CharacterThumb from "@/components/character/CharacterThumb.vue";

@Component({
  components: {
    CharacterThumb
  },
  props: {
    character: {
      type: Object,
      requried: true
    },
    votes: {
      type: Number,
      required: false
    }
  }
})
export default class CharacterVotable extends Vue {
  vote() {
    this.$emit("winner", this.character.id);
  }
}
</script>

<style lang="scss" scoped>
.character-votable {
  display: flex;
  flex-basis: 40%;
}
</style>
