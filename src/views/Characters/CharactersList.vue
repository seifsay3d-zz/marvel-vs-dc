<template>
  <div>
    <!-- banner -->
    <s-h1>Welcome to $World Name</s-h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non blanditiis
      nostrum neque vitae porro maiores illo doloremque voluptatem error
      repudiandae.
    </p>
    <!-- end banner -->
    <router-link
      v-for="char in characters"
      :key="char.name"
      :to="{
        name: 'character',
        params: {
          id: char.id
        }
      }"
    >
      <character-thumb :key="char.name" :name="char.name"></character-thumb>
    </router-link>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SH1 from "@/components/user-interface/mdc-header";
import CharacterThumb from "@/components/themes/marvel/CharacterThumb.vue";
import { mapState, mapActions } from "vuex";
import { RootState } from "@/types";

@Component({
  components: {
    SH1,
    CharacterThumb
  },
  computed: mapState({
    characters: (state: RootState) => state.characters.list
  }),
  methods: mapActions(["characters/getCharacters"])
})
export default class CharacterList extends Vue {
  private characters: any;
  private "characters/getCharacters": any;

  created(): void {
    this[`characters/getCharacters`]();
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
