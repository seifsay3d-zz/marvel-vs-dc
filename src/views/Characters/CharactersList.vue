<template>
  <div>
    <!-- banner -->
    <s-h1>Welcome to $World Name</s-h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis
      nostrum neque vitae porro maiores illo doloremque voluptatem error
      repudiandae.
    </p>
    <div class="characters">
      <character-thumb
        v-for="char in characters"
        :key="char.name"
        :character="char"
        @change="updateMatchCharacters"
      ></character-thumb>

      <button v-if="isMatchReady" @click="goToMatch">GO</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SH1 from "@/components/user-interface/mdc-header";
import CharacterThumb from "@/components/themes/marvel/CharacterThumb.vue";
import { mapState, mapActions } from "vuex";
import { RootState, Character } from "@/types";

@Component({
  components: {
    SH1,
    CharacterThumb
  },
  computed: mapState({
    characters: (state: RootState) => state.characters.list,
    isMatchReady() {
      return this.matchedCharacters.length > 1;
    }
  }),
  methods: mapActions(["characters/getCharacters"])
})
export default class CharacterList extends Vue {
  private characters: any;
  private "characters/getCharacters": any;

  matchedCharacters: Character[] = [];

  created(): void {
    this[`characters/getCharacters`]();
  }

  updateMatchCharacters(character: Character): void {
    let index = this.matchedCharacters.map(e => e.id).indexOf(character.id);

    if (index < 0) {
      this.matchedCharacters.push(character);
      return;
    }

    this.matchedCharacters.splice(index, 1);
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
.characters {
  display: flex;
  flex-wrap: wrap;
}
</style>
