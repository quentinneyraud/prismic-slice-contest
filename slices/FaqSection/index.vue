<template>
  <section class="FaqSection-component">
    <prismic-rich-text class="FaqSection-title" :field="slice.primary.title" />
    <prismic-rich-text class="FaqSection-text" :field="slice.primary.text" />

    <div class="FaqSection-itemsList">
      <div
        v-for="(item, itemIndex) in slice.items"
        :key="itemIndex"
        class="FaqSection-item"
        :class="{
          opened: openState[itemIndex]
        }"
      >
        <button class="FaqSection-itemHeader" @click="onQuestionClick(itemIndex)">
          <p class="FaqSection-itemQuestion">
            {{ itemIndex + 1 }}. {{ item.question }}
          </p>
        </button>
        <div class="FaqSection-itemBody">
          <prismic-rich-text class="FaqSection-itemAnswer" :field="item.answer" />
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
      openState: this.slice.items.map(_ => true)
    }
  },
  methods: {
    onQuestionClick (itemIndex) {
      this.$set(this.openState, itemIndex, !this.openState[itemIndex])
    }
  }
}
</script>
<style scoped lang="stylus">
.FaqSection-component
  background-color #efefea
  padding 75px 50px

.FaqSection-title
  /deep/ h1
    font(castoro-ff, 90, auto, fw-regular, #385250)

.FaqSection-text
  margin-top 30px

  /deep/ p
    font(roboto-ff, 16, 26, fw-regular, grey)

.FaqSection-itemsList
  margin-top 50px

.FaqSection-item
  &.opened
    .FaqSection-itemBody
      height auto

.FaqSection-itemHeader
  position relative
  display flex
  align-items center
  height 100px

  &:after
    content ''
    position absolute
    top 100%
    left 0
    width 100%
    height 1px
    background-color #385250
    transform-origin left center
    opacity 0.5
    transform scaleX(0.75)

.FaqSection-itemQuestion
  font(castoro-ff, 40, auto, fw-regular, #385250)

.FaqSection-itemBody
  height 0
  overflow hidden
  transition height 0.5s easeInoutCubic

.FaqSection-itemAnswer
  padding 25px 0

  /deep/
    p
      font(roboto-ff, 16, auto, fw-regular, grey)
</style>
