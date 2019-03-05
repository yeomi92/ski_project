import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {

    },
    state: {
        authInfo: {
            active: false,
            id: null,
            name: null,
            email: null
        }
    },
    getters: {
        authInfo: state => state.authInfo
    },
    mutations: {
        setAuthInfo(state, payload) {
            state.authInfo.active = payload.active
            state.authInfo.id = payload.id
            state.authInfo.name = payload.name
            state.authInfo.email = payload.email
        }
    }
})