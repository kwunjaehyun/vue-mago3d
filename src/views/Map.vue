<template>
  <div id="magoContainer" class="mapWrap">

  </div>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
    computed : {
        ...mapGetters({
            geopolicy : 'getGeopolicy'
        })
    },
    watch : {
        geopolicy() {
            this.initGlobe();
            /*const f4dController = instance.getF4dController();
            
            instance.setBaseUrl('http://localhost/f4d');
            let json = JSON.parse("{\"attributes\":{\"isPhysical\":false,\"nodeType\":\"root\",\"projectType\":\"workshop\",\"specularLighting\":true},\"children\":[{\"attributes\":{\"isPhysical\":true,\"nodeType\":\"workshop\",\"propertyFilter\":true},\"children\":[],\"data_key\":\"SOCIALROOM\",\"data_name\":\"SOCIALROOM\",\"mapping_type\":\"origin\",\"latitude\":37.52361393000871,\"longitude\":126.92941546440123,\"height\":100,\"heading\":0,\"pitch\":0,\"roll\":0},{\"attributes\":{\"isPhysical\":true,\"nodeType\":\"workshop\",\"propertyFilter\":false},\"children\":[],\"data_key\":\"STUDENTROOM\",\"data_name\":\"STUDENTROOM\",\"mapping_type\":\"origin\",\"latitude\":37.52361393000871,\"longitude\":126.92941546440123,\"height\":100,\"heading\":0,\"pitch\":0,\"roll\":0},{\"attributes\":{\"isPhysical\":true,\"nodeType\":\"workshop\",\"propertyFilter\":false},\"children\":[],\"data_key\":\"Tile_1\",\"data_name\":\"Tile_1\",\"mapping_type\":\"origin\",\"latitude\":37.52361393000871,\"longitude\":126.92941546440123,\"height\":100,\"heading\":0,\"pitch\":0,\"roll\":0}],\"parent\":0,\"depth\":1,\"view_order\":2,\"data_key\":\"sample\",\"data_name\":\"sample\",\"mapping_type\":\"origin\"}")
            
            f4dController.addF4dGroup(json);*/
        }
    },
    methods : {
        initGlobe() {
            console.info('mago start');
            this.geopolicy.initDuration = 0;
            this.geopolicy.initLatitude = 37.52361393000871;
            this.geopolicy.initLongitude = 126.92941546440123;

            const Mago3D = this.Mago3D;
            const instance = new Mago3D.Mago3d('magoContainer', this.geopolicy);
            this.$store.commit('SET_MAGOINSTANCE', instance);
        }
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