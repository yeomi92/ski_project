<template>
  <div class="div_signup">
    <div class="no_margin">
      <label for="signup_id">id</label>
      <input id="signup_id" type="text" placeholder="id" v-model="form.id">
      <input type="button" value="중복확인" class="btn_check_id" @click="checkId">
    </div>
    <p>
      <span :class="`${id?`green`:`red`}`">{{idMsg}}</span>
    </p>
    <div>
      <label for="signup_pw">password</label>
      <input id="signup_pw" type="password" placeholder="password" v-model="form.pw">
    </div>
    <div class="no_margin">
      <label for="signup_check_pw">password 확인</label>
      <input id="signup_check_pw" type="password" placeholder="again password" v-model="form.checkPw">
    </div>
    <p>
      <span :class="`${pw?`green`:`red`}`">{{pwMsg}}</span>
    </p>
    <div>
      <label for="signup_name">name</label>
      <input id="signup_name" type="text" placeholder="name" v-model="form.name">
    </div>
    <div>
      <label for="signup_nickname">nickname</label>
      <input id="signup_nickname" type="text" placeholder="nickname" v-model="form.nickname">
    </div>
    <div>
      <label for="signup_email">email</label>
      <input id="signup_email" type="text" placeholder="email" v-model="form.email">
    </div>
    <div class="div_agree">
      <input type="button" value="약관" @click="popup" class="btn_terms"/>
      <input ic="signup_agree" type="checkbox" v-model="form.checkedAgree">
      <label for="signup_agree" class="label_agree">동의</label>
    </div>
    <div>
      <input type="button" value="가입" @click="signUp" class="btn_signup"/>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        id: '',
        pw: '',
        checkPw: '',
        email: '',
        name: '',
        nickname: '',
        checkedAgree: false
      },
      id: null,
      pw: false,
      show: true
    };
  },
  computed: {
    idMsg: function() {
      console.log(this.form.id)
      let result=''
      if(!this.form.id||this.id==null){
        result=''
        this.id=null
      }else if(this.id){
        result='사용가능한 아이디입니다.'
      }else {
        result='중복된 아이디입니다.'
      }
      return result
    },
    pwMsg: function() {
      console.log(this.form.pw)
      console.log(this.form.checkPw)
      let result=''
      if(!this.form.pw||!this.form.checkPw){
        result=''
        this.pw=false
      }else if(this.form.pw===this.form.checkPw){
        result='비밀번호가 일치합니다.'
        this.pw=true
      }else{
        result='비밀번호가 일치하지 않습니다.'
        this.pw=false
      }
      return result
    }
  },
  methods: {
    ...mapMutations({
      popupShow: 'popup/show'
    }),
    popup() {
      console.log('약관 클릭')
      this.popupShow({
        title: '회원가입 약관',
        useComponent: 'TermsOfSignup'
      });
    },
    checkId() {
      console.log('아이디 중복체크')
      if(!!this.form.id){
        const params = {params: {
          id: this.form.id
        }}
        this.$http.post('/api/auth/check/id', params)
        .then((res)=>{
          this.id=!res.data.result
        })
      }else{
        alert('아이디를 입력하세요.')
      }
    },
    signUp() {
      if(!this.id){
        alert('아이디 중복확인을 하세요')
      }else if(!this.pw){
        alert('비밀번호를 확인하세요')
      } else if(!this.checkedAgree){
        alert('약관을 동의하세요.')
      }else if(this.id&&this.pw){
        const params = {
          params: {
            id: this.form.id,
            password: this.form.pw,
            name: this.form.name,
            nickname: this.form.nickname,
            email: this.form.email
          }
        }
        console.log(params)
        this.$http.post('/api/auth/signup', params)
        .then((res)=>{
          alert('가입을 축하드립니다.')
          console.log(res)
          this.$router.push({
            name: 'AuthLogin'
          })

        })
      }
      
    }
  }
};
</script>
<style>
</style>
