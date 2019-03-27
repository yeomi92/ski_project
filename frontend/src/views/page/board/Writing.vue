<template>
    <div class="writing">
        <div>
            <div class="head">
                글작성
            </div>
            <div class="body">
                <div>
                    <div class="th">title</div>
                    <div class="td"><input type="text" v-model="title"></div>
                </div>
                <div>
                    <div class="th">author</div>
                    <div class="td">{{authInfo.id}}</div>
                </div>
                <div>
                    <div class="th">content</div>
                    <div class="td"><textarea v-model="content"></textarea></div>
                </div>
            </div>
            <div class="btn">
                <input-button
                    :text="'저장'"
                    :width="'100px'"
                    @clicked="save"
                ></input-button>
                <input-button
                    :text="'취소'"
                    :width="'100px'"
                    @clicked="goBoard"
                ></input-button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import InputButton from '@/components/ui/InputButton'
export default {
    name: 'Writing',
    components: {
        InputButton
    },
    data () {
        return {
            title: '',
            content: ''
        }
    },
    computed: {
        ...mapGetters({
            authInfo: 'authInfo'
        })
    },
    methods: {
        save () {
            const params = {
                title: this.title,
                author: this.authInfo.id,
                content: this.content
            }
            this.$http.post('/api/board/write', params)
            .then((res)=>{
                console.log(res)
                this.goBoard()
            })
        },
        goBoard () {
            this.$router.push({
                name: 'BoardList',
                params: {
                    page: 1
                }
            })
        }
    }
}
</script>
<style>

</style>


