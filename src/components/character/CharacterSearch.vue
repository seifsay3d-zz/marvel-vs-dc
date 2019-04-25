<template>
  <form @submit.prevent="onSubmit">
    <input v-model="characterName" placeholder="search" />
  </form>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class ChracterSearch extends Vue {
  characterName = null;

  onSubmit() {
    this.$router.push({
      name: "characters",
      query: {
        name: this.characterName
      }
    });
    this.characterName = null;
  }
}
</script>
