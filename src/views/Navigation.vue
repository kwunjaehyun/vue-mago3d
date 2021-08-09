<template>
    <div class="navWrap">
        <ul id="navWrap" class="nav">
            <li v-for="menu in menus" :key="menu" :id="menu.htmlId" :class="menu.cssClass" :title="menu.name">{{menu.name}}</li>
        </ul>
    </div>
  
</template>

<script>
import {menus} from '../api/mock'
export default {
    data() {
        return {
            menus : []
        }
    },
    created() {
        menus().then(res => {
            const menus = res.data?.menus;
            console.info(menus);
            this.menus = menus;
        }).catch(err => {
            console.log(err);
        });
    }
}
</script>

<style>

</style>