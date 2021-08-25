<template>
  <Header></Header>
  <Body></Body>
</template>

<script>
import Header from './Header.vue';
import Body from './Body.vue';
import { geopolicy } from '../api/mock.js'

export default {
  name: 'Main',
  components : {
    Header,
    Body   
  },
  beforeCreate() {
    geopolicy().then(({data}) => {
        this.$store.commit('SET_GEOPOLICY', data);
    });
  }
}
</script>

<style>
</style>