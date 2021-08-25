<template>
<div id="loginwrap">
<div id="login">
	
    <select id="userLocale" name="userLocale" class="language">
        <option value="ko">KO</option>
        <option value="en">EN</option>
    </select>
	
	<div class="login-wrapper">
		<img src="@/assets/images/ko/mago3d_logo.png" alt="MAGO3D" />		
        <fieldset>
            <legend>mago3D 로그인</legend>
            <label for="userId"><span class="blind" >아이디</span></label>
            <input type="text" id="userId" name="userId" class="inputid" title="아이디" placeholder="아이디" required="required" autofocus="autofocus" />
            <label for="password"><span class="blind">비밀번호</span></label>
            <input type="password" id="password" name="password" class="inputpwd" title="비밀번호" placeholder="비밀번호" required="required" />
            <button type="button" class="btn-login" @click="login">Sign In</button>
        </fieldset>
		<ul class="join">
			<li class="on"><a href="/sign/signup">회원가입</a></li>
			<li><a href="/sign/password/find">비밀번호 찾기</a></li>
		</ul>
		<hr class="h20">	
	</div>
	<div class="copyright">ⓒ Gaia3d Corp. All Rights Reserved.</div>
</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed : {
        ...mapGetters({
            isLogin : 'isLogin'
        })
    },
    watch : {
        isLogin() {
            if(this.$store.state.isLogin) {
                this.$router.push('/');
            } else {
                alert('로그인실패');
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch('LOGIN');
        }
    }
}
</script>

<style>

</style>