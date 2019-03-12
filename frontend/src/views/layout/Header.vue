<template>
<div id="header">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" @click="goHome">yhs</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" @click="goBoard">board</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goTwitter">twitter</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">test</a>
        </li> -->
      </ul>
      <!-- TODO -->
      <!-- sass적용 -->
      <div class="btn_group" v-if="!authInfo.active">
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-info my-2 my-sm-0" type="button" @click="goLogin">로그인</button>
        </form>
        <!-- 회원가입 구현 -->
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="goSignup">회원가입</button>
        </form>
      </div>
      <!-- 마이페이지/로그아웃 구현 -->
      <div class="btn_group" v-if="authInfo.active">
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-info my-2 my-sm-0" type="button" @click="goMypage">마이페이지</button>
        </form>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="logout">로그아웃</button>
        </form>
      </div>
    </div>
  </nav>
</div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { clearAuthInfo, cookieGetAuthInfo, isLogined } from '@/utils/auth'
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      authInfo: "authInfo"
    })
  },
  created() {
    console.log("layout/Header.vue");
    if(isLogined()){
            this.setAuthInfo(cookieGetAuthInfo())
    }
  },
  methods: {
    ...mapMutations({
      clearAuthInfo: 'clearAuthInfo',
      setAuthInfo: 'setAuthInfo'
    }),
    goHome() {
      console.log("Home클릭");
      this.$router.push({
        name: "Home"
      });
    },
    goBoard() {
      console.log("Board클릭");
      this.$router.push({
        name: "BoardList",
        params: {
          page: 1
        }
        //query: { type: 'menu' }
      });
    },
    goTwitter() {
      console.log("Twitter클릭");
      this.$router.push({
        name: "TwitterList"
      });
    },
    goLogin() {
      console.log("Login클릭");
      this.$router.push({
        name: "AuthLogin"
      });
    },
    goSignup() {
      console.log("회원가입클릭");
      this.$router.push({
        name: "AuthSignup"
      });
    },
    goMypage() {
      console.log('마이페이지클릭')
      this.$router.push({
        name: 'AuthMypage'
      })
    },
    logout() {
      console.log('로그아웃클릭')
      clearAuthInfo()
      this.clearAuthInfo()
      this.$router.push({
        name: 'Home'
      })
    }
  }
};
</script>