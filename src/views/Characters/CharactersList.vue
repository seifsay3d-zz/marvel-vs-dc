<template>
  <dc-container>
    <dc-header>Characters</dc-header>
    <div class="characters-list">
      <character-thumb
        class="characters-list__character"
        v-for="char in characters"
        :key="char.id"
        :character="char"
        :is-selectable="true"
        :is-selected="isCharacterSelceted(char)"
        @change="updateMatchCharacters"
      ></character-thumb>
    </div>
    <transition name="fade">
      <div class="match_button" v-if="isMatchReady">
        <button class="button button--danger" @click="goToMatch">
          See whos' better!
        </button>
      </div>
    </transition>
  </dc-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CharacterThumb from "@/components/CharacterThumb.vue";
import SSlider from "@/components/SSlider.vue";
import SSlide from "@/components/SSlide.vue";
import { mapState, mapActions } from "vuex";
import { RootState, Character } from "@/types";

@Component({
  components: {
    CharacterThumb,
    SSlide,
    SSlider
  },
  computed: mapState({
    characters: (state: RootState) => state.characters.list,
    isMatchReady() {
      return this.matchedCharacters.length > 1;
    }
  }),
  methods: mapActions([
    "characters/getCharacters",
    "characters/getCharactersByName"
  ])
})
export default class CharacterList extends Vue {
  characters: any;
  "characters/getCharacters": any;

  matchedCharacters: Character[] = [];

  created(): void {
    const nameInQueryParams = this.$route.query.name;

    if (nameInQueryParams) {
      this[`characters/getCharactersByName`](nameInQueryParams);
      return;
    }

    this[`characters/getCharacters`]();
  }

  updateMatchCharacters(character: Character): void {
    let index = this.matchedCharacters.map(e => e.id).indexOf(character.id);

    if (index < 0) {
      if (this.matchedCharacters.length === 2) {
        Vue.set(this.matchedCharacters, 0, character);
        return;
      }

      this.matchedCharacters.push(character);
      return;
    }

    this.matchedCharacters.splice(index, 1);
  }

  isCharacterSelceted(character: Character) {
    return this.matchedCharacters.find(c => c.id === character.id)
      ? true
      : false;
  }

  goToMatch() {
    this.$router.push({
      name: "match",
      params: {
        first: this.matchedCharacters[0].id,
        second: this.matchedCharacters[1].id
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.characters-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__character {
    box-sizing: border-box;
    width: 30%;
    max-width: 30%;
  }
}
.match_button {
  position: fixed;
  right: 0;
  top: 80px;
  padding: 10px;
}
</style>
