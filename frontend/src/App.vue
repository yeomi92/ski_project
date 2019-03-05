<template>
  <div id="app">
    <Popup v-if="popupShow"></Popup>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Popup from '@/views/layout/Popup';
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Popup
  },
  computed: {
    ...mapGetters({
      popupShow: 'popup/show'
    })
  }
}
</script>

<style lang="scss">
@import './assets/sass/main.scss';
</style>
