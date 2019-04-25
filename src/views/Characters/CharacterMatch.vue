<template>
  <div class="match" v-if="match">
    <h1>Who's Better?</h1>
    <div class="match__wrapper">
      <character-votable
        :character="match.first.character"
        @winner="vote"
      ></character-votable>
      {{ match.first.votes }}
      <span class="match__symbol">vs</span>
      <character-votable
        :character="match.second.character"
        @winner="vote"
      ></character-votable>
      {{ match.second.votes }}
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState, mapActions } from "vuex";
import CharacterVotable from "@/components/CharacterVotable.vue";
import { RootState } from "@/types";

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

  created(): void {
    this["characters/getMatch"]({
      first: this.$route.params.first,
      second: this.$route.params.second
    });
  }
  vote(characterId: number) {
    const payload = {
      character: characterId,
      match: this.match.id
    };

    this["characters/postVote"](payload);
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
