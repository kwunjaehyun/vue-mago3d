<template>
  <Header></Header>
  <Body></Body>
</template>

<script>
import Header from './views/Header.vue';
import Body from './views/Body.vue';

export default {
  name: 'App',
  components : {
    Header,
    Body   
  },
  created : function() {
    console.info('asdf');
  }
}
</script>

<style src="./assets/css/ko/user-style.css"></style>