<template>
  <div class="l-container">
    <slice-zone
      type="product_page"
      :uid="$route.params.uid"
    />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone
  }
}
</script>

<style>
</style>
