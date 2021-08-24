<template>
  <Header></Header>
  <Body></Body>
</template>

<script>
import Header from './views/Header.vue';
import Body from './views/Body.vue';
import { geopolicy } from './api/mock.js'

export default {
  name: 'App',
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

<style src="./assets/css/ko/user-style.css"></style>
<style>
#app {
  height: 100%;
  width: 100%;
}
</style>