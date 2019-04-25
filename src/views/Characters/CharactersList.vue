<template>
  <div>
    <div class="characters_list">
      <character-thumb
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
        <button class="button" @click="goToMatch">See whos' better!</button>
      </div>
    </transition>
  </div>
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
.characters_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.content {
  height: 100%;
  display: flex;

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    flex-basis: 50%;
    flex-grow: 1;
  }
  &__right {
    display: flex;
    flex-basis: 50%;
    flex-grow: 1;
    width: 50%;
  }

  &__img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.match_button {
  position: fixed;
  right: 0;
  top: 80px;
  padding: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
