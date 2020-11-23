<template>
  <section class="TextTitle-component">
    <prismic-rich-text
      :field="slice.primary.title"
      class="TextTitle-title"
    />
    <prismic-rich-text
      class="TextTitle-text"
      :field="slice.primary.text"
    />
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
  }
}
</script>
<style scoped lang="stylus">
.TextTitle-component
  background-color #efefea
  padding 75px 0px

.TextTitle-title
  max-width 700px
  padding-left 50px

  /deep/ h2
    font(castoro-ff, 90, auto, fw-regular, #385250)
    text-transform capitalize

.TextTitle-text
  margin-top 50px
  padding-left 150px

  /deep/
    p
      font(roboto-ff, 16, 26, fw-regular, black)
</style>
