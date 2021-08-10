<template>
  <div id="wrap" style="min-height: 560px;">
      <Navigation></Navigation>
      <Map></Map>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Map from './Map.vue'
export default {
    components : {
        Navigation,
        Map
    }
}
</script>

<style>

</style>