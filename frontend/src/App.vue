<template>
  <div id="app">
    <Popup v-if="popupShow"></Popup>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Popup from '@/views/layout/Popup';
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
import { cookieGetAuthInfo, isLogined } from '@/utils/auth'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Popup
  },
  created () {
    if(isLogined()){
      this.setAuthInfo(cookieGetAuthInfo())
    }
  },
  computed: {
    ...mapGetters({
      popupShow: 'popup/show'
    })
  },
  methods: {
    ...mapMutations({
      setAuthInfo: 'setAuthInfo'
    })
  }
}
</script>

<style lang="scss">
@import './assets/sass/main.scss';
</style>
