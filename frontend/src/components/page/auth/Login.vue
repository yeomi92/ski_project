<template>
<div>
  <b-form inline>
    <label class="sr-only" for="id">id</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0" prepend="ID" placeholder="Jane Doe">
      <b-input  id="id" placeholder="id" v-model="auth.id"></b-input>
    </b-input-group>

    <label class="sr-only" for="password">password</label>
    <b-input-group prepend="PW" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="password" placeholder="password" v-model="auth.pw"/>
    </b-input-group>

    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

    <b-button variant="primary" @click="login">Login</b-button>
  </b-form>
</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      auth: {
        id:'',
        pw:''
      }
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
          alert('로그인 성공')
          //TODO
          //cookie에 로그인 정보 저장하기
          this.$router.push({
            name: 'Main'
          })
        }else{
          alert('로그인 실패')
        }
      })
    }
  }
};
</script>
<style>

</style>
