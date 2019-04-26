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
import Vue from "vue";
import Component from "vue-class-component";
import CharacterThumb from "@/components/character/CharacterThumb.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import { RootState, Character } from "@/types";

@Component({
  props: {
    type: {
      type: String,
      validator: val => ["strongest", "weakest"].includes(val),
      required: true
    }
  },
  components: {
    CharacterThumb
  },
  computed: {
    characters() {
      const isAsc = this.type === "strongest" ? false : true;
      return this.charactersByPower(isAsc);
    },
    ...mapGetters({
      charactersByPower: "characters/getCharactersByPower"
    })
  },
  methods: mapActions(["characters/getCharacters"])
})
export default class CharacterGroupedByPower extends Vue {
  "characters/getCharacters": any;

  created(): void {
    this[`characters/getCharacters`]();
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
