<template>
  <div id="magoContainer" class="mapWrap">

  </div>
</template>

<script>
export default {
    inject:['Mago3D'],
    mounted() {
        this.$nextTick(() => {
            const Mago3D = this.Mago3D;
            console.info(document.getElementById('magoContainer').style);
            new Mago3D.Mago3d('magoContainer');
        });
    }
}
</script>

<style>
.mapWrap {
    float: right;
    width: calc(100% - 72px);
    height: 100%;
    background-color: #eee;
}
</style>