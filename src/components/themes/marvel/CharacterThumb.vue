<template>
  <s-thumb :class="{ selected: isSelected }">
    <h2>{{ character.name }} {{ character.id }}</h2>
    <router-link
      :to="{
        name: 'character',
        params: {
          id: character.id
        }
      }"
      >Show</router-link
    >
    <input type="checkbox" v-model="isSelected" />
  </s-thumb>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SThumb from "@/components/shared/character-thumbs.ts";

@Component({
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  components: {
    SThumb
  },
  watch: {
    isSelected() {
      this.select();
    }
  }
})
export default class CharacterThumb extends Vue {
  isSelected = false;

  select(): void {
    this.$emit("change", { ...this.character });
  }
}
</script>
<style lang="scss" scoped>
.selected {
  background: red;
}
</style>
