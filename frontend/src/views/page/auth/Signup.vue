<template>
  <div class="div_singup">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1" label="아이디:" label-for="exampleInput1">
        <b-form-input id="exampleInput1" type="text" v-model="form.id" required placeholder="id"/>
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
        <b-form-select id="exampleInput6" :options="foods" required v-model="form.food"/>
      </b-form-group>
      
      <b-button variant="danger" @click="popup">약관</b-button>

      <b-button type="submit" variant="primary">가입하기</b-button>
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
        food: null
      },
      foods: [{ text: "선택", value: null }, "여자", "남자"],
      show: true
    };
  },
  methods: {
    ...mapMutations({
      popupShow: 'popup/show'
    }),
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
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
    }
  }
};
</script>
<style>
</style>
