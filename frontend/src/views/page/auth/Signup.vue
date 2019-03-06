<template>
  <div class="div_singup">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1" label="아이디:" label-for="exampleInput1">
        <b-form-input id="exampleInput1" type="text" v-model="form.id" required placeholder="id"/>
        <!-- <input class="form-control btn_check_id" type="button" v-model="form.checkId" value="중복확인"/> -->
        <form class="form-inline my-2 my-lg-0 btn_check_id"><button type="button" class="btn btn-outline-success my-2 my-sm-0" @click="checkId">중복확인</button></form>
        <span class="check_msg" :class="id?'green':'red'">{{idMsg}}</span>
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="비밀번호:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="password"
          v-model="form.pw"
          required
          placeholder="비밀번호"
        />
      </b-form-group>

      <b-form-group id="exampleInputGroup3" label="비밀번호 확인:" label-for="exampleInput3">
        <b-form-input
          id="exampleInput3"
          type="password"
          v-model="form.checkPw"
          required
          placeholder="비밀번호"
        />
        <span class="check_msg" :class="pw?'green':'red'">{{pwMsg}}</span>
      </b-form-group>

      <b-form-group id="exampleInputGroup4" label="이름:" label-for="exampleInput4">
        <b-form-input id="exampleInput4" type="text" v-model="form.name" required placeholder="이름"/>
      </b-form-group>
      <b-form-group id="exampleInputGroup5" label="Email 주소:" label-for="exampleInput5">
        <b-form-input
          id="exampleInput5"
          type="email"
          v-model="form.email"
          required
          placeholder="email"
        />
      </b-form-group>

      <b-form-group id="exampleInputGroup6" label="성별:" label-for="exampleInput6">
        <b-form-select id="exampleInput6" :options="genderList" required v-model="form.gender"/>
      </b-form-group>
      
      <input type="checkbox" id="agree" v-model="form.checkedAgree" required>
      <label for="agree">약관 동의</label>

      <b-button variant="danger" @click="popup">약관</b-button>

      <b-button class="btn_signup" type="submit" variant="primary">가입하기</b-button>
    </b-form>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      form: {
        id: "",
        pw: "",
        checkPw: "",
        email: "",
        name: "",
        gender: null,
        checkedAgree: ''
      },
      id: null,
      pw: false,
      genderList: [{ text: "선택", value: null }, "여자", "남자"],
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
    onSubmit(evt) {
      evt.preventDefault();
      if(!this.id){
        alert('아이디 중복확인을 하세요')
      }else if(!this.pw){
        alert('비밀번호를 하세요')
      }else if(this.id&&this.pw){
        //alert(JSON.stringify(this.form));
        alert('가입을 축하드립니다.')
        this.$router.push({
          name: 'AuthLogin'
        })
      }
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    popup() {
      console.log('약관 클릭')
      this.popupShow({
        title: '회원가입 약관',
        useComponent: 'TermsOfSignup'
      });
    },
    checkId() {
      const params = {params: {
        id: this.form.id
      }}
      this.$http.post('/api/auth/check/id', params)
      .then((res)=>{
        this.id=!res.data
      })
    }
  }
};
</script>
<style>
</style>
