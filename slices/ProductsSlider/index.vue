<template>
  <section class="ProductsSlider-component">
    <!-- Title -->
    <prismic-rich-text
      v-if="slice.primary.title[0].text"
      :field="slice.primary.title"
      class="ProductsSlider-title"
    />

    <div class="ProductsSlider-main">
      <!-- Main -->
      <div class="ProductsSlider-imageSide">
        <transition
          mode="in-out"
          @before-enter="onImageBeforeEnter"
          @enter="onImageEnter"
          @leave="onImageLeave"
        >
          <div
            :key="currentSliderIndex"
            class="ProductsSlider-imageWrapper"
          >
            <prismic-image
              class="ProductsSlider-backgroundImage"
              :field="blurredCurrentProductImage"
            />
            <prismic-image
              class="ProductsSlider-image"
              :field="currentProductImage"
            />
          </div>
        </transition>
      </div>

      <!-- Content -->
      <div class="ProductsSlider-contentSide">
        <div class="ProductsSlider-productNameWrapper">
          <p class="ProductsSlider-productName">
            {{ currentProductName }}
          </p>
        </div>

        <div class="ProductsSlider-nav">
          <button class="ProductsSlider-previous" @click="onPreviousClick">
            Previous.
          </button>
          <button class="ProductsSlider-next" @click="onNextClick">
            Next.
          </button>
        </div>

        <prismic-link
          v-if="currentLink"
          :field="currentLink"
          class="ProductsSlider-link"
        >
          View more
        </prismic-link>
      </div>
    </div>
  </section>
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
  data () {
    return {
      currentSliderIndex: 0
    }
  },
  computed: {
    currentProductImage () {
      return this.slice.items[this.currentSliderIndex].image
    },
    blurredCurrentProductImage () {
      return {
        ...this.currentProductImage,
        url: this.currentProductImage.url + '&blur=300'
      }
    },
    currentProductName () {
      return this.slice.items[this.currentSliderIndex].name
    },
    currentLink () {
      return this.slice.items[this.currentSliderIndex].link
    }
  },
  mounted () {
    console.log(this.slice)
  },
  methods: {
    onPreviousClick () {
      if (this.currentSliderIndex === 0) {
        this.currentSliderIndex = this.slice.items.length - 1
        return
      }

      this.currentSliderIndex--
    },
    onNextClick () {
      if (this.currentSliderIndex === this.slice.items.length - 1) {
        this.currentSliderIndex = 0
        return
      }

      this.currentSliderIndex++
    },
    /**
     * Image animations
     */
    onImageBeforeEnter (el) {
      gsap
        .set(el.querySelector('.ProductsSlider-backgroundImage'), {
          y: '100%'
        })
      gsap
        .set(el.querySelector('.ProductsSlider-image'), {
          y: '100%'
        })
    },
    onImageEnter (el, done) {
      done()
      gsap
        .timeline()
        .to(el.querySelector('.ProductsSlider-backgroundImage'), {
          y: '0%',
          duration: 1,
          ease: 'power2.inOut'
        }, 0)
        .to(el.querySelector('.ProductsSlider-image'), {
          y: '0%',
          duration: 1,
          ease: 'power2.out'
        }, 0.35)
    },
    onImageLeave (el, done) {
      gsap
        .timeline({
          onComplete: done
        })
        .to(el.querySelector('.ProductsSlider-backgroundImage'), {
          y: '-100%',
          duration: 1,
          ease: 'power2.inOut'
        }, 0)
        .to(el.querySelector('.ProductsSlider-image'), {
          y: '-100%',
          duration: 1,
          ease: 'power2.out'
        }, 0)
    }
  }
}
</script>
<style lang="stylus" scoped>
.ProductsSlider-component
  position relative

.ProductsSlider-title
  /deep/ h2
    display inline-block
    font(roboto-ff, 45, auto, 100, black)

  &:after
    content ''
    display block
    width 100%
    height 1px
    background-color rgba(#000, 0.5)
    margin-top 25px

.ProductsSlider-main
  display flex
  width 100%
  margin-top 50px

  +desktop-up()
    height 500px

.ProductsSlider-imageSide, .ProductsSlider-contentSide
  position relative

  +desktop-up()
    height 100%
    width 50%
    flex 0 0 50%

.ProductsSlider-imageSide
  overflow hidden

.ProductsSlider-imageWrapper
  full-parent()

.ProductsSlider-image
  full-parent()
  object-fit cover
  padding 100px

.ProductsSlider-backgroundImage
  display inline-block
  full-parent()
  object-fit cover

.ProductsSlider-productNameWrapper
  centered()

.ProductsSlider-nav
  position absolute
  bottom 30px
  left 40px

.ProductsSlider-previous, .ProductsSlider-next
  font(roboto-ff, 14, auto, fw-regular, black)

.ProductsSlider-previous
  &:after
    content '/'
    display inline-block
    margin 0 5px

.ProductsSlider-productName
  font(roboto-ff, 45, auto, fw-bold, black)

.ProductsSlider-link
  font(roboto-ff, 18, auto, fw-light, black, 0em, italic)
  position absolute
  bottom 30px
  right 40px

  &:after
    content ''
    position absolute
    top calc(100% + 10px)
    left 0
    width 100%
    height 1px
    background-color #000
    transform-origin left center
    transform scaleX(0)
    transition transform 0.5s easeOutCubic

  &:hover:after
    transform scaleX(1)
    transition transform 0.5s easeInCubic
</style>
