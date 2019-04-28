<template>
  <div class="slider">
    <div class="slider__slides">
      <slot></slot>
    </div>
    <button
      class="slider__button slider__button--prev"
      :disabled="activeSlideIndex - 1 < 0"
      @click="updateSlideIndex(-1)"
    >
      <span>&#8678;</span>
    </button>
    <button
      :disabled="activeSlideIndex + 1 >= slides.length"
      class="slider__button slider__button--next"
      @click="updateSlideIndex(1)"
    >
      <span>&#8680;</span>
    </button>
    <ul class="slider__dots">
      <li
        v-for="(slide, index) in slides"
        :key="index"
        @click="setSlideIndex(index)"
        :class="{ 'slider__dots--active': index == activeSlideIndex }"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
@Component({})
export default class Slider extends Vue {
  slides: any = [];
  activeSlideIndex = 0;

  @Watch("activeSlideIndex", { immediate: true })
  onActiveSlideIndexChanged() {
    this.slides.forEach((item: any, index: number) => {
      if (this.activeSlideIndex == index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  mounted() {
    this.slides = this.$slots.default
      ? this.$slots.default.map(s => {
          if (s.componentInstance && s.componentInstance.$el) {
            return s.componentInstance.$el;
          }
        })
      : [];
  }
  updateSlideIndex(direction: number) {
    this.activeSlideIndex += direction;
  }
  setSlideIndex(index: number) {
    this.activeSlideIndex = index;
  }
}
</script>

<style lang="scss">
$slider-dot-size: 15px;
$control-color: #fff;

.slider {
  display: flex;
  position: relative;
  background: #111;
  height: 550px;
  padding: 0 100px;

  &__slides {
    width: 100%;

    display: flex;
    overflow: hidden;
  }

  &__button {
    position: absolute;
    font-size: 25px;
    color: $control-color;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    border: 1px solid $control-color;

    &--prev {
      left: 20px;
      top: calc(50% - 25px);
    }

    &--next {
      right: 20px;
      top: calc(50% - 25px);
    }
  }

  &__dots {
    list-style: none;
    text-align: center;
    position: absolute;
    bottom: 10px;
    width: 100px;
    left: calc(50% - 50px);
    margin: 0px;
    padding: 0px;
    li {
      position: relative;
      display: inline-block;
      margin: 0 5px;
      border: 1px solid $control-color;
      border-radius: 50%;
      width: $slider-dot-size;
      height: $slider-dot-size;

      cursor: pointer;
      &:before {
        position: absolute;
        content: "";
        border-radius: 50%;
        width: 100%;
        height: 100%;
        left: 0;

        background: transparent;
      }

      &.slider__dots--active {
        &:before {
          background: $control-color !important;
        }
      }
    }
  }
}
</style>
