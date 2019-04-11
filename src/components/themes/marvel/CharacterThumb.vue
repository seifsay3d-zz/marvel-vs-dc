<template>
  <s-thumb>
    <img src>
    <h2>{{name}}</h2>
    <p></p>
  </s-thumb>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SThumb from "@/components/shared/character-thumbs.ts";

@Component({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    SThumb
  }
})
export default class CharacterThumb extends Vue {}
</script>