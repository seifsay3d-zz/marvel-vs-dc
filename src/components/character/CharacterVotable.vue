<template>
  <div :class="['character-votable']">
    <character-thumb :class="[{ 'character-votable--is-winner': isWinner }]" :character="character">
      <template #content>
        <p>Recieved {{ votes }} votes</p>
      </template>
      <template #actions>
        <li>
          <button class="button button--is-fullwidth" @click="vote">Vote</button>
        </li>
      </template>
    </character-thumb>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CharacterThumb from "@/components/character/CharacterThumb.vue";
import { Character } from "@/types";
@Component({
  components: {
    CharacterThumb
  }
})
export default class CharacterVotable extends Vue {
  @Prop({ required: true }) readonly character!: Character;
  @Prop({ required: true }) readonly votes!: number;
  @Prop({ required: true }) readonly isWinner!: boolean;
  vote() {
    this.$emit("winner", this.character.id);
  }
}
</script>

<style lang="scss" scoped>
</style>
