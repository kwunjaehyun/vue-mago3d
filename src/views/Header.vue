<template>
  <header id="headerWrap">
      <a href="/">
        <h1 class="magologo" title="디지털트윈 플랫폼">디지털트윈 플랫폼</h1>        
      </a>
      <div class="gnb">
          <ul>
              <li class="user">
                  <!--a v-if="isLogin" title="Sign Out">Sign Out</a-->
                  <router-link v-if="isLogin" to="/sign/signout" title="Sign Out">Sign Out</router-link>
                  <router-link v-else to="/sign/signin" title="Sign In">Sign In</router-link>
              </li>
          </ul>
      </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            isLogin: this.$store.state.isLogin
        }
    }
}
</script>

<style>

</style>