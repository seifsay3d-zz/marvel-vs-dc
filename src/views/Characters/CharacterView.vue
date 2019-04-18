<template>
  <div v-if="character">{{ character.name }}</div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { RootState } from "@/types";
import { mapState, mapActions } from "vuex";

@Component({
  components: {},
  computed: mapState({
    character: (state: RootState) => state.characters.character
  }),
  methods: mapActions(["characters/getCharacter"])
})
export default class CharacterView extends Vue {
  private "characters/getCharacter": any;
  created(): void {
    this["characters/getCharacter"](this.$route.params.id);
  }
}
</script>

<style lang="scss"></style>
