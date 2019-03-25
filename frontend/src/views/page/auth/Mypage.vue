<template>
    <div class="mypage">
        <div class="title">마이페이지</div>
        <div class="mypage_list">
            <div>
                <div class="list_head">ID</div>
                <div class="list_body">{{list.id}}</div>
                <div class="btn_modify"></div>
            </div>
            <div>
                <div class="list_head">NAME</div>
                <div class="list_body">{{list.name}}</div>
                <div class="btn_modify"></div>
            </div>
            <div>
                <div class="list_head">NICKNAME</div>
                <div class="list_body"><input type="text" v-model="list.nickName" :readonly="nickname.readonly"></div>
                <div class="btn_modify"><input type="button" v-model="nickname.btn" @click="modifyData(nickname)"></div>
            </div>
            <div>
                <div class="list_head">EMAIL</div>
                <div class="list_body"><input type="text" v-model="list.email" :readonly="email.readonly"></div>
                <div class="btn_modify"><input type="button" v-model="email.btn" @click="modifyData(email)"></div>
            </div>
            <div>
                <div class="list_head">CREATED DATE</div>
                <div class="list_body">{{list.createDate.split('T')[0]}}</div>
                <div class="btn_modify"></div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import List from '@/components/ui/List'
export default {
    name: 'Mypage',
    components: {
        List
    },
    created() {
        this.list=(this.authInfo)
        console.log(this.list)
        this.nickname.data = this.authInfo.nickName
        this.eamil.data = this.authInfo.email
    },
    data() {
        return{
            list: [],
            nickname: {
                name: 'nickname',
                data: '',
                readonly: true,
                btn: '수정'
            },
            email: {
                name: 'email',
                data: '',
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
        modifyData (data) {
            data.readonly = !data.readonly
            data.btn = data.readonly?'수정':'저장'
            if(!data.readonly){
                const params = {
                    params: {
                        id: this.list.id,
                        column: data.name,
                        value: data.data
                    }
                }
                this.$http.post('/api/auth/update')
                .then((res)=>{
                    console.log(res)
                })
            }
        }
    }
}
</script>
<style>

</style>

