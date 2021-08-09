<template>
  <header id="headerWrap">
      <a href="/">
        <h1 class="magologo" title="디지털트윈 플랫폼">디지털트윈 플랫폼</h1>        
      </a>
      <div class="gnb">
          <ul>
              <li>
                  <router-link to="/guide/help" title="API 도움말">API 도움말</router-link>
              </li>
              <li class="user">
                  <router-link to="/sign/signin" title="Sign In">Sign In</router-link>
              </li>
          </ul>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>