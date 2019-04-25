<template>
  <dc-container v-if="character">
    <div class="card">
      <div class="card__image">
        <img :src="character.image" />
      </div>
      <div class="card__content">
        <div>
          <dc-header>{{ character.name }}</dc-header>
          <p>{{ character.description }}</p>
          {{ character.power }}
        </div>
      </div>
    </div>
  </dc-container>
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

<style lang="scss">
@import "~@/assets/scss/vars.scss";
.card {
  display: flex;
  background: $primary;
  border-radius: 15px;
  padding: 40px;

  &__image {
    flex-basis: 30%;
    img {
      width: 100%;
      height: auto;
    }
  }
  &__content {
    margin-left: 50px;
  }
}
</style>
