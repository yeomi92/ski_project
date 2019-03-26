<template>
    <div class="mypage">
        <div class="title">마이페이지</div>
        <div class="mypage_list">
            <div>
                <div class="list_head">ID</div>
                <div class="list_body">{{auth.id}}</div>
                <div class="btn_modify"></div>
            </div>
            <div>
                <div class="list_head">NAME</div>
                <div class="list_body">{{auth.name}}</div>
                <div class="btn_modify"></div>
            </div>
            <div>
                <div class="list_head">NICKNAME</div>
                <div class="list_body"><input type="text" v-model="nickname.value" :readonly="nickname.readonly"></div>
                <div class="btn_modify"><input type="button" v-model="nickname.btn" @click="modifyData(nickname)"></div>
            </div>
            <div>
                <div class="list_head">EMAIL</div>
                <div class="list_body"><input type="text" v-model="email.value" :readonly="email.readonly"></div>
                <div class="btn_modify"><input type="button" v-model="email.btn" @click="modifyData(email)"></div>
            </div>
            <div>
                <div class="list_head">CREATED DATE</div>
                <div class="list_body">{{auth.create_date.split('T')[0]}}</div>
                <div class="btn_modify"></div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import {cookieSetAuthInfo, clearAuthInfo, cookieGetAuthInfo} from '@/utils/auth'
export default {
    name: 'Mypage',
    created() {
        this.auth=(this.authInfo)
        this.nickname.value = this.authInfo.nickname
        this.email.value = this.authInfo.email
    },
    data() {
        return{
            auth: [],
            nickname: {
                name: 'nickname',
                value: '',
                readonly: true,
                btn: '수정'
            },
            email: {
                name: 'email',
                value: '',
                readonly: true,
                btn: '수정'
            }
        }
    },
    computed: {
        ...mapGetters({
            authInfo: 'authInfo'
        })
    },
    methods: {
        ...mapMutations({
            setAuthInfo: 'setAuthInfo'
        }),
        modifyData (data) {
            data.readonly = !data.readonly
            data.btn = data.readonly?'수정':'저장'
            if(data.readonly){
                let params = new Object()
                params[data.name] = data.value
                this.$http.put(`/api/auth/update/${this.auth.id}`,params)
                .then((res)=>{
                    this.auth[data.name] = data.value
                    this.setAuthInfo(this.auth)
                    cookieSetAuthInfo(this.auth)
                })
            }
        }
    }
}
</script>
<style>

</style>

