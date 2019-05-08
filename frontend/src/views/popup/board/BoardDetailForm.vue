<template>
    <div class="board_detail">
        <div class="board_detail__form">
            <div class="board_detail__form__info">
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
            <div class="board_detail__form__btn" v-show="isAuthor">
                <input type="button" value="저장" @click="update">
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'BoardDetail',
    // props: {
    //     props: {
    //         type: Object,
    //         required: true
    //     }
    // },
    data(){
        return {
            item: {
                title: '',
                author: {
                    id: '',
                },
                views: 0,
                content: '',
                create_date: '',
                mod_date: ''
            },
            isAuthor: false
        }
    },
    computed: {
        ...mapGetters({
            authInfo: 'authInfo',
            props: 'popup/props'
        })
    },
    mounted () {
    },
    created(){
        console.log('BoardDetailForm.vue');
        this.getItem();
    },
    methods: {
        ...mapMutations({
            popupClose: 'popup/close'
        }),
        getItem () {
            let id = this.props.item._id
            this.$http.get(`/api/board/detail/${id}`)
            .then((res) => {
                this.item = res.data.item[0]
                this.isAuthor = this.authInfo.id === this.item.author.id
            });
        },
        update(){
            const params = {
                title: this.item.title,
                content: this.item.content,
                mod_date: Date.now()
            }
            this.$http.put(`/api/board/update/${this.props.item._id}`, params)
            .then((res) => {
                console.log(res)
                //this.content = res.data;
                this.popupClose()
                this.props.reload()
            });
        }
    }
}
</script>
<style lang="scss">
</style>
