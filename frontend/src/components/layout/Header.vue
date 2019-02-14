<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">yhs</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" @click="goHome">Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goBoard">board</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">test</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="goLogin">로그인</button>
      </form>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "header입니다."
    };
  },
  created() {
    console.log("layout/Header.vue");
  },
  methods: {
    goHome() {
      console.log('Home클릭');
      this.$router.push({
        name: 'Main'
      })
    },
    goBoard() {
      console.log('Board클릭');
      this.$router.push({
          name: 'BoardList',
          params: {
            page: 1
          }
          //query: { type: 'menu' }
      });
    },
    goLogin() {
      console.log('Login클릭');
      this.$router.push({
        name: 'AuthLogin'
      })
    }
  }
};
</script>
