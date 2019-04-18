<template>
  <div v-if="match">
    <character-thumb :character="match.first"></character-thumb>vs
    <character-thumb :character="match.second"></character-thumb>
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
