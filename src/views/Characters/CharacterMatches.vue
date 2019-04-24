<template>
  <div>
    <div class="matches_list" v-for="match in matches" :key="match.id">
      <character-match-thumb :match="match"></character-match-thumb>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState, mapActions } from "vuex";
import { RootState } from "@/types";
import CharacterMatchThumb from "@/components/CharacterMatchThumb.vue";

@Component({
  components: {
    CharacterMatchThumb
  },
  computed: mapState({
    matches: (state: RootState) => state.characters.matches
  }),
  methods: {
    ...mapActions(["characters/getMatches"])
  }
})
export default class CharacterMatches extends Vue {
  "characters/getMatches": any;
  created() {
    this["characters/getMatches"]();
  }
}
</script>

<style lang="scss" scoped>
.matches_list {
  display: flex;
  flex-wrap: wrap;
}
</style>
