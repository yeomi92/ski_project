<template>
<div id="header">
  <div class="nav">
    <div class="menus">
      <div v-for="menu in menus" :class="`menu ${menu.active?`active`:``}`" :key="menu.text" @click="clickMenu(menu)">
        {{menu.text}}
      </div>
    </div>
    <div class="buttons" v-if="!authInfo.active">
     <div class="button"><input type="button" value="SIGN IN" @click="clickButton('AuthLogin')"/></div>
     <div class="button"><input type="button" value="SIGN UP" @click="clickButton('AuthSignup')"/></div>
    </div>
    <div class="buttons" v-else>
     <div class="button"><input type="button" value="MY PAGE" @click="clickButton('AuthMypage')"/></div>
     <div class="button"><input type="button" value="SIGN OUT" @click="logout"/></div>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { clearAuthInfo, cookieGetAuthInfo, isLogined } from '@/utils/auth'
export default {
  name: "Header",
  components: {
  },
  computed: {
    ...mapGetters({
      authInfo: "authInfo"
    })
  },
  data() {
    return {
      menus: [
        {
          text: 'YHS',
          active: false,
          routeName: 'Home'
        },
        {
          text: 'BOARD',
          active: false,
          routeName: 'BoardList',
          params: {
            page: 1
          }
        },
        {
          text: 'SNS',
          active: false,
          routeName: 'SnsList'
        }
      ]
    };
  },
  methods: {
    ...mapMutations({
      clearAuthInfo: 'clearAuthInfo',
      setAuthInfo: 'setAuthInfo'
    }),
    logout() {
      clearAuthInfo()
      this.clearAuthInfo()
      this.$router.push({
        name: 'Home'
      })
    },
    clickMenu (menu) {
      this.clearMenu()
      menu.active = true
      this.$router.push({
        name: menu.routeName,
        params: menu.params
      });
    },
    clickButton (routeName) {
      this.clearMenu()
      this.$router.push({
        name: routeName
      });
    },
    clearMenu () {
      this.menus.map((i)=>{
        i.active = false
      })
    }
  }
};
</script>