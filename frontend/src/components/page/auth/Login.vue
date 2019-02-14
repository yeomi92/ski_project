<template>
<div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">ID</span>
    </div>
    <input
      type="text"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
    >
  </div>
  <div>
      <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">PW</span>
    </div>
    <input
      type="password"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
    >
  </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "로그인페이지"
    };
  },
  created() {
    console.log("Login.vue");
  }
};
</script>
<style>

</style>
