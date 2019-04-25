<template>
  <div class="strongest-characters">
    <div class="strongest-characters__title">
      <h1>The Best Of Marvel!</h1>
    </div>
    <div class="strongest-characters__list">
      <character-thumb
        v-for="char in strongestCharacters"
        :key="char.name"
        :character="char"
        :is-selectable="false"
      ></character-thumb>
    </div>
  </div>
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
}
</style>
