<template>
  <dc-container>
    <div class="characters">
      <dc-header>{{ type }} Characters</dc-header>
      <div class="characters__list">
        <div
          class="characters__character"
          v-for="char in characters"
          :key="char.id"
        >
          <character-thumb :character="char"></character-thumb>
        </div>
      </div>
    </div>
  </dc-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import CharacterThumb from "@/components/character/CharacterThumb.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import { RootState, Character } from "@/types";

@Component({
  components: {
    CharacterThumb
  }
})
export default class CharacterGroupedByPower extends Vue {
  @Prop({
    default: "strongest",
    validator: (val: string) => ["strongest", "weakest"].includes(val)
  })
  readonly type!: string;

  created(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.$store.dispatch("characters/getCharacters");
  }

  get charactersByPower() {
    return this.$store.getters["characters/getCharactersByPower"];
  }

  get characters() {
    const isAsc = this.type === "strongest" ? false : true;
    return this.charactersByPower(isAsc);
  }
}
</script>

<style lang="scss" scoped>
.characters {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__character {
    box-sizing: border-box;
    display: flex;
    flex-basis: 24%;
  }
}
</style>
