<template>
    <div class="navWrap">
        <ul id="navWrap" class="nav">

            <router-link v-for="menu in menus" :key="menu" :to="'/'+menu.cssClass" active-class="on" custom v-slot="{navigate, isActive}">
                <li @click="toggle(isActive, navigate)" :class="[menu.cssClass, isActive && 'on']" :id="menu.htmlId" :title="menu.name">{{menu.name}}</li>
            </router-link>
        </ul>
        <ContentsWrap v-show="showContent"></ContentsWrap>
    </div>
</template>

<script>
import {menus} from '../api/mock'

import ContentsWrap from './ContentsWrap.vue'

export default {
    components : {
        ContentsWrap   
    },
    data() {
        return {
            menus : [],
            showContent : false
        }
    },
    watch : {
        showContent() {
            //console.info(`watch ${this.showContent}`);
        }
    },
    created() {
        menus().then(res => {
            const menus = res.data?.menus;
            this.menus = menus;
        }).catch(err => {
            console.log(err);
        });
    },
    methods: {
        toggle(active, navFunc) {
            if(!active) {
                navFunc.call(this);
            } else {
                this.$router.push('/');
            }
            this.showContent = !active;
        },
    }
}
</script>