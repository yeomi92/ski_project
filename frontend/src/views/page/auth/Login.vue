<template>
<div class="div_login">
  <b-form>
    <label class="sr-only" for="id">id</label>
    <b-input-group class="mb-2 mr-sm-2 id" prepend="ID">
      <b-input  id="id" placeholder="id" v-model="auth.id"></b-input>
    </b-input-group>

    <label class="sr-only" for="password">password</label>
    <b-input-group prepend="PW" class="mb-2 mr-sm-2">
      <b-input id="password" type="password" placeholder="password" v-model="auth.pw"/>
    </b-input-group>
    <div class="login_msg">{{loginMsg}}</div>
    <b-button variant="primary" @click="login" class="btn_login" @keyup.enter="btn_login">Login</b-button>
  </b-form>
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
