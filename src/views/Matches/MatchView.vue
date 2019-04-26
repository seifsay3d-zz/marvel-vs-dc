<template>
  <dc-container class="match" v-if="match">
    <dc-header>Who's Stronger?</dc-header>
    <div class="match__wrapper">
      <character-votable
        class="match__character"
        :votes="match.first.votes"
        :is-winner="match.first.votes > match.second.votes"
        :character="match.first.character"
        @winner="vote"
      ></character-votable>
      <span class="match__symbol">vs</span>
      <character-votable
        class="match__character"
        :votes="match.second.votes"
        :is-winner="match.first.votes < match.second.votes"
        :character="match.second.character"
        @winner="vote"
      ></character-votable>
    </div>
  </dc-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState, mapActions } from "vuex";
import CharacterVotable from "@/components/character/CharacterVotable.vue";
import { RootState, Match } from "@/types";

@Component({
  components: {
    CharacterVotable
  },
  computed: mapState({
    match: (state: RootState) => state.characters.match
  }),
  methods: {
    ...mapActions(["characters/getMatch", "characters/postVote"])
  }
})
export default class CharacterMatch extends Vue {
  "characters/getMatch": any;
  "characters/postVote": any;
  "match": Match;

  created(): void {
    this["characters/getMatch"]({
      first: this.$route.params.first,
      second: this.$route.params.second
    });
  }
  vote(characterId: number): void {
    const payload = {
      character: characterId,
      match: this.match.id
    };

    this["characters/postVote"](payload);
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/vars.scss";

.match {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;

  &__wrapper {
    display: flex;
    justify-content: space-evenly;
  }

  &__character {
    flex-basis: 40%;
  }
  &__symbol {
    color: $primary;
    font-size: 40px;
    align-self: center;
  }
}
</style>
