<template>
  <header class="ProductHeader-component">
    <!-- Background -->
    <div ref="backgroundImageWrapper" class="ProductHeader-backgroundImageWrapper">
      <prismic-image ref="backgroundImage" class="ProductHeader-backgroundImage" :field="slice.primary.image" />
    </div>

    <!-- Main -->
    <div class="ProductHeader-main">
      <prismic-rich-text class="ProductHeader-title" :field="slice.primary.title" />
      <prismic-rich-text class="ProductHeader-description" :field="slice.primary.description" />
    </div>

    <!-- View more -->
    <button
      class="ProductHeader-viewMore"
      @mouseenter="onButtonMouseEnter"
      @mouseleave="onButtonMouseLeave"
    >
      <span
        v-for="(letter, letterIndex) in viewMoreText"
        :key="letterIndex"
        :style="{
          '--rotate': letterIndex * 20 + 'deg'
        }"
      >
        {{ letter }}
      </span>
    </button>
  </header>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },
  computed: {
    viewMoreText () {
      return `·${this.slice.primary.viewMoreText}·`
    }
  },
  methods: {
    onButtonMouseEnter () {
      gsap
        .timeline()
        .to(this.$refs.backgroundImageWrapper, {
          clipPath: 'ellipse(100% 100% at 50% 50%)',
          duration: 0.8,
          ease: 'power2.inOut'
        }, 0)
        .to(this.$refs.backgroundImage, {
          scale: 1.2,
          rotate: 3,
          duration: 2,
          ease: 'power2.inOut'
        }, 0)
    },
    onButtonMouseLeave () {
      gsap
        .timeline()
        .to(this.$refs.backgroundImageWrapper, {
          clipPath: 'ellipse(90% 100% at 50% 0%)',
          duration: 0.3,
          ease: 'power2.inOut'
        }, 0)
        .to(this.$refs.backgroundImage, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        }, 0)
    }
  }
}
</script>

<style scoped lang="stylus">
.ProductHeader-component
  position relative
  width 100%
  min-height 600px

.ProductHeader-backgroundImageWrapper
  full-parent()
  overflow hidden
  clip-path ellipse(90% 100% at 50% 0%)

  &:after
    content ''
    full-parent()
    background-color rgba(black, 0.2)

.ProductHeader-backgroundImage
  width 100%
  height 100%
  object-fit cover

.ProductHeader-main
  position absolute
  width 100%
  height 100%
  z-index 10
  display flex
  flex-direction column
  padding 0 100px
  justify-content center

.ProductHeader-title
  max-width 700px

  /deep/ h1
    font(roboto-ff, 80, 80, 700, white)

.ProductHeader-description
  margin-top 25px

  /deep/ p
    font(roboto-ff, 16, auto, 400, white)

@keyframes viewMoreRotate
  0%
    transform translate3d(-50%, 50%, 0px) rotate(0deg)

  100%
    transform translate3d(-50%, 50%, 0px) rotate(360deg)

.ProductHeader-viewMore
  position absolute
  z-index 10
  bottom 0
  left 50%
  width 100px
  height 100px
  background-color white
  border-radius 50%
  border 1px solid rgba(black, 0.5)
  transform translate3d(-50%, 50%, 0px)
  animation viewMoreRotate 5s infinite easeInOutCubic

  span
    no-interaction()
    font(roboto-ff, 14, auto, 700, black)
    padding-top 5px
    text-transform uppercase
    position absolute
    top 0
    left 50%
    transform-origin bottom center
    transform translateX(-50%) rotate(var(--rotate))
    height 50%
</style>
