<template>
    <div class="board_detail">
        <div>
            <div class="title">
                상세보기
            </div>
            <div class="body">
                <div>
                    <div class="th">title</div>
                    <div class="td"><input type="text" v-model="item.title" :disabled="!isAuthor"></div>
                </div>
                <div>
                    <div class="th">author</div>
                    <div class="td">{{item.author.id}}</div>
                </div>
                <div>
                    <div class="th">views</div>
                    <div class="td">{{item.views}}</div>
                </div>
                <div>
                    <div class="th">content</div>
                    <div class="td"><textarea v-model="item.content" :disabled="!isAuthor"></textarea></div>
                </div>
                <div>
                    <div class="th">create date</div>
                    <div class="td">{{item.create_date.split('T')[0]}}</div>
                </div>
                <div>
                    <div class="th">modify date</div>
                    <div class="td">{{item.mod_date.split('T')[0]}}</div>
                </div>
            </div>
            <div class="btn" v-show="isAuthor">
                <input type="button" value="저장" @click="update">
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'BoardDetail',
    data(){
        return {
            item: {},
            isAuthor: false
        }
    },
    computed: {
        ...mapGetters({
            authInfo: 'authInfo'
        })
    },
    mounted () {
        this.getItem();
    },
    watch: {
        '$route' (to, from){
            this.$router.push({
                params: {
                    id: to.params.id
                }
            })
            this.getItem();
        }
    },
    created(){
        console.log('BoardDetail.vue');
    },
    methods: {
        getItem () {
            this.$http.get(`/api/board/detail/${this.$route.params.id}`)
            .then((res) => {
                this.item = res.data.item[0]
                this.isAuthor = this.authInfo.id === this.item.author.id
            });
        },
        update(){
            const params = {
                title: this.item.title,
                content: this.item.content
            }
            this.$http.put(`/api/board/update/${this.$route.params.id}`, params)
            .then((res) => {
                this.content = res.data;
            });
        }
    }
}
</script>
<style lang="scss">
</style>
