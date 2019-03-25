import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

import popup from './modules/layout/popup'
import sns from './modules/page/sns'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        popup,
        sns
    },
    state: {
        authInfo: {
            active: false,
            id: null,
            name: null,
            email: null,
            nickName: null,
            createDate: null
        }
    },
    getters: {
        authInfo: state => state.authInfo
    },
    mutations: {
        setAuthInfo(state, payload) {
            state.authInfo.active = true
            state.authInfo.id = payload.id
            state.authInfo.name = payload.name
            state.authInfo.email = payload.email
            state.authInfo.nickName = payload.nickname
            state.authInfo.createDate = payload.create_date
            
        },
        clearAuthInfo(state) {
            state.authInfo.active = false,
            state.authInfo.id = null,
            state.authInfo.name = null,
            state.authInfo.email = null,
            state.authInfo.nickName = null
            state.authInfo.createDate = null
        }
    }
})