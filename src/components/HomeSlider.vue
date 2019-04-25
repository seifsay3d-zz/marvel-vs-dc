<template>
  <s-slider>
    <s-slide>
      <div class="content">
        <div class="content__left">
          <h1>Spiderman is back</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            ipsam temporibus modi natus commodi dolor quisquam asperiores
            aperiam soluta illum.
          </p>
          <button class="button">Read more</button>
        </div>
        <div class="content__right">
          <img
            class="content__img"
            src="https://66.media.tumblr.com/4f75bcc996fd0bbc205bb9949deb885b/tumblr_oo554mii3u1ushyv6o2_1280.png"
          />
        </div>
      </div>
    </s-slide>
    <s-slide class="red">
      <div class="content">
        <div class="content__left">
          <h1>Avengers are cool !</h1>
          <p>These are probably not the avengers but whatever ..</p>
          <button>Read more</button>
        </div>
        <div class="content__right">
          <img
            class="content__img"
            src="https://66.media.tumblr.com/0eeffd106d0c7629e6cc27fefb54cfdd/tumblr_opftgedswX1ushyv6o1_1280.png"
          />
        </div>
      </div>
    </s-slide>
  </s-slider>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SSlider from "@/components/SSlider.vue";
import SSlide from "@/components/SSlide.vue";

@Component({
  components: {
    SSlide,
    SSlider
  }
})
export default class HomeSlider extends Vue {}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    flex-basis: 50%;
    flex-grow: 1;
  }
  &__right {
    display: flex;
    flex-basis: 50%;
    flex-grow: 1;
    width: 50%;
    justify-content: flex-end;
  }

  &__img {
    object-fit: contain;
    object-position: right;
  }
}
</style>
