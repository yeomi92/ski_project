<template>
<div class="div_signin">
  <div>
    <label for="user_id">User ID</label>
    <input type="text" id="user_id" placeholder="" v-model="auth.id" required>
  </div>
  <div>
    <label for="user_pw">User Password</label>
    <input type="password" id="user_pw" placeholder="" v-model="auth.pw" required>
  </div>
  <div>
    <span>{{loginMsg}}</span>
  </div>
  <div>
    <input type="button" value="Sign in" @click="login" @keyup.enter="login">
  </div>
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
  mounted() {
    window.addEventListener('keyup', this.watchEnterKey, true)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.watchEnterKey, true)
  },
  methods: {
    ...mapMutations({
      setAuthInfo: 'setAuthInfo'
    }),
    login(){
      console.log('로그인')
      const params = {params: {
        id: this.auth.id,
        password: this.auth.pw
      }}
      this.$http.post('/api/auth/login',params)
      .then((res)=>{
        if(res.data.success){
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
    },
    watchEnterKey (e) {
      if (e instanceof KeyboardEvent && e.code === 'Enter' && !!this.auth.id && !!this.auth.pw){
        this.login()
      }
    }
  }
};
</script>
<style>

</style>
