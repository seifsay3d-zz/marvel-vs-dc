<template>
  <div v-if="match.first && match.second">
    <character-thumb
      :key="match.first.id"
      :name="match.first.name"
    ></character-thumb
    >vs
    <character-thumb
      :key="match.second.id"
      :name="match.second.name"
    ></character-thumb>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState, mapActions } from "vuex";
import CharacterThumb from "@/components/themes/marvel/CharacterThumb.vue";
import { RootState } from "@/types";

@Component({
  components: {
    CharacterThumb
  },
  computed: mapState({
    match: (state: RootState) => state.characters.match
  }),
  methods: {
    ...mapActions(["characters/getCharacters"])
  }
})
export default class CharacterChallenge extends Vue {
  created(): void {
    this["characters/getMatch"]({
      first: this.$route.params.first,
      second: this.$route.params.second
    });
  }
}
</script>
