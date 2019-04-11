<template>
  <div>{{character.name}}</div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState, mapActions } from "vuex";

@Component({
  components: {},
  computed: mapState({
    character: state => state.characters.character
  }),
  methods: mapActions(["getCharacter"])
})
export default class CharacterView extends Vue {
  created() {
    this.getCharacter(this.$route.params.id);
  }
}
</script>

<style lang="scss"></style>
