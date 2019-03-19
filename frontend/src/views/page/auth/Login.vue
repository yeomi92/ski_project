<template>
<div class="div_signin">
  <p>
    <label for="user_id">User ID</label>
    <input type="text" id="user_id" placeholder="" v-model="auth.id">
  </p>
  <p>
    <label for="user_pw">User Password</label>
    <input type="password" id="user_pw" placeholder="" v-model="auth.pw">
  </p>
  <p>
    <span>{{loginMsg}}</span>
  </p>
  <p>
    <input type="button" value="Sign in" @click="login">
  </p>
</div>
</template>
<script>
import {mapMutations} from 'vuex'
import {cookieSetAuthInfo} from '@/utils/auth'
export default {
  name: "Login",
  data() {
    return {
      auth: {
        id:'',
        pw:''
      },
      loginMsg: ''
    };
  },
  created() {
    console.log('Login.vue');
  },
  methods: {
    ...mapMutations({
      setAuthInfo: 'setAuthInfo'
    }),
    login(){
      console.log('로그인')
      console.log(JSON.stringify(this.auth))
      const params = {params: {
        id: this.auth.id,
        pw: this.auth.pw
      }}
      this.$http.post('/api/auth/login',params)
      .then((res)=>{
        if(res.data.success){
          console.log(res.data.user)
          let user = res.data.user
          user.active = true
          this.setAuthInfo(user)
          cookieSetAuthInfo(user)
          this.$router.push({
            name: 'Home'
          })
        }else{
          this.loginMsg='id또는 pw가 일치하지 않습니다.'
        }
      })
    }
  }
};
</script>
<style>

</style>
