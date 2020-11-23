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
          <div class="TeamSlider-itemInner">
            <div class="TeamSlider-itemContent">
              <p class="TeamSlider-itemName">
                {{ item.name }}
              </p>

              <p class="TeamSlider-itemStatus">
                {{ item.name }}
              </p>
            </div>

            <prismic-image
              :field="item.portrait"
              class="TeamSlider-itemImage"
            />
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
  height 400px
  size(calc(400px))
  margin-top 40px

.TeamSlider-itemInner
  position relative
  height 100%
  width 100%
  display flex
  flex-direction column
  align-items center
  justify-content center
  text-align center

.TeamSlider-itemImage
  full-parent()
  width 100%
  height 100%
  object-fit cover
  no-select()

.TeamSlider-itemContent
  position relative
  z-index 10
  padding 25px 0
  background-color #fff

.TeamSlider-itemName
  font(castoro-ff, 30, auto, fw-bold, black)

.TeamSlider-itemStatus
  font(roboto-ff, 16, auto, fw-bold, black)
</style>
