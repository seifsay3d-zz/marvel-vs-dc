<template>
  <div>
    <div v-for="match in matches" :key="match.id">
      {{ match.first.id }} {{ match.first.name }}
      vs
      {{ match.second.id }} {{ match.second.name }}
      <router-link
        :to="{
          name: 'match',
          params: {
            first: match.first.id,
            second: match.second.id
          }
        }"
        >view</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState, mapActions } from "vuex";
import { RootState } from "@/types";

@Component({
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
