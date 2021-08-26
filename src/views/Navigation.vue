<template>
    <div class="navWrap">
        <ul id="navWrap" class="nav">
            <router-link v-for="menu in menus" :key="menu" :to="'/'+menu.cssClass" custom v-slot="{href}">
                <li :href="href" :id="menu.htmlId" :class="menu.cssClass" :title="menu.name">{{menu.name}}</li>
            </router-link>
        </ul>
        <Contents v-show="false"></Contents>
    </div>
</template>

<script>
import {menus} from '../api/mock'
import Contents from './Contents.vue'

export default {
    components : {
        Contents   
    },
    data() {
        return {
            menus : []
        }
    },
    created() {
        menus().then(res => {
            const menus = res.data?.menus;
            this.menus = menus;
        }).catch(err => {
            console.log(err);
        });
    }
}
</script>

<style>

</style>