<template>
  <div class="match" v-if="match">
    <h1>Who's Better?</h1>
    <div class="match__wrapper">
      <character-thumb :character="match.first"></character-thumb>
      <span class="match__symbol">vs</span>
      <character-thumb :character="match.second"></character-thumb>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState, mapActions } from "vuex";
import CharacterThumb from "@/components/CharacterThumb.vue";
import { RootState } from "@/types";

@Component({
  components: {
    CharacterThumb
  },
  computed: mapState({
    match: (state: RootState) => state.characters.match
  }),
  methods: {
    ...mapActions(["characters/getMatch"])
  }
})
export default class CharacterChallenge extends Vue {
  "characters/getMatch": any;

  created(): void {
    this["characters/getMatch"]({
      first: this.$route.params.first,
      second: this.$route.params.second
    });
  }
}
</script>
<style lang="scss" scoped>
.match {
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 10px;
  &__wrapper {
    display: flex;
    justify-content: space-evenly;
  }

  &__symbol {
    align-self: center;
  }
}
</style>
