<template>
  <dc-container>
    <div class="strongest-characters">
      <dc-header>Strongest Characters</dc-header>
      <div class="strongest-characters__list">
        <div
          class="strongest-characters__character"
          v-for="char in strongestCharacters"
          :key="char.id"
        >
          <character-thumb :character="char" :is-selectable="false"></character-thumb>
        </div>
      </div>
    </div>
  </dc-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CharacterThumb from "@/components/CharacterThumb.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import { RootState, Character } from "@/types";

@Component({
  components: {
    CharacterThumb
  },
  computed: {
    ...mapGetters({
      strongestCharacters: "characters/getStrongestCharacters"
    })
  },
  methods: mapActions(["characters/getCharacters"])
})
export default class StrongestCharacters extends Vue {
  "characters/getCharacters": any;

  matchedCharacters: Character[] = [];

  created(): void {
    this[`characters/getCharacters`]();
  }
}
</script>

<style lang="scss" scoped>
.strongest-characters {
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
