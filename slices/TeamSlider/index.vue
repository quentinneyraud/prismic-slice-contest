<template>
  <section class="TeamSlider-component">
    <div class="l-row">
      <div class="l-column TeamSlider-title">
        <!-- Title -->
        <prismic-rich-text
          v-if="slice.primary.title[0].text"
          :field="slice.primary.title"
          class="TeamSlider-title"
        />
      </div>

      <div class="l-column TeamSlider-slider">
        <div
          v-for="(item, itemIndex) in slice.items"
          :key="itemIndex"
          class="TeamSlider-item"
        >
          <div class="TeamSlider-itemImageWrapper">
            <prismic-image
              :field="item.portrait"
              class="TeamSlider-itemImage"
            />
          </div>
          <div class="TeamSlider-itemContent">
            <p class="TeamSlider-itemName">
              {{ item.name }}
            </p>

            <p class="TeamSlider-itemStatus">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
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
  }
}
</script>
<style scoped lang="stylus">
.TeamSlider-component
  position relative
  padding 75px 25px
  background-color #efefea

.TeamSlider-title
  size(3)

  /deep/ h2
    display inline-block
    font(castoro-ff, 90, auto, fw-regular, #385250)
    text-transform capitalize

.TeamSlider-slider
  size(9)
  display flex
  flex-wrap wrap
  overflow hidden
  margin-top -40px

.TeamSlider-item
  padding 0 25px
  size(calc(400px))
  margin-top 40px
  display flex
  flex-direction column
  align-items center

.TeamSlider-itemImageWrapper
  position relative
  height 400px
  width 100%

.TeamSlider-itemImage
  full-parent()
  width 100%
  height 100%
  object-fit cover
  no-select()

.TeamSlider-itemContent
  position relative
  margin-top -50px
  padding 15px 25px
  width 80%
  z-index 10
  background-color #fff
  text-align center

.TeamSlider-itemName
  font(castoro-ff, 20, auto, fw-bold, black)

.TeamSlider-itemStatus
  font(roboto-ff, 12, auto, fw-bold, grey, 0em, italic)
  margin-top 15px
</style>
