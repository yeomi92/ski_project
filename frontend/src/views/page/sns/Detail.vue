<template>
<div class="post_detail">
    <div v-if="item.length!==0">
        <div class="left_section">
            <img :src="getPostImgUrl(item.photo)" width="100%" height="500">
        </div>
        <div class="right_section">
            <div class="profile">
                <img :src="getProfileImgUrl(item.author)" width="50">
                <span class="user">{{item.author}}</span>
            </div>
            <div class="contents">
                <div class="content">
                    <div>{{item.content}}</div>
                </div>
                <div class="comment_list">
                    <div class="comment" v-for="comment in commentList" :key="comment.id">
                        <span class="comment_user">{{comment.author}}</span>
                        <span>{{comment.content}}</span>
                    </div>
                    <!-- 임시적으로 댓글이 작성되는거처럼 보이기위함 -->
                    <div class="comment" v-for="comment in comments" :key="comment.id">
                        <div v-if="comment.post_id===postId">
                        <span class="comment_user">{{comment.author}}</span>
                        <span>{{comment.content}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="icon_area">
                <div class="icons">
                    <img src="@/assets/img/icon/icon_empty_heart.png" width="30">
                    <img src="@/assets/img/icon/icon_comment.png" width="23">
                </div>
                <div class="upload_date">{{item.date}}</div>
            </div>
            <div class="comment_area">
                <textarea type="text" v-model="comment" placeholder="댓글을 작성하세요."></textarea>
                <button type="button" value="게시" class="btn btn-primary btn_write" @click="writeComment">게시</button>
            </div>
        </div>
    </div>
    <div class="btn_goList">
        <button type="button" value="목록" class="btn btn-primary btn_write" @click="goSnsList">목록으로</button>
    </div>
</div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name: 'SnsDetail',
    data() {
        return {
            postId: '',
            item:[],
            commentList:[],
            comment: ''
        }
    },
    computed: {
        ...mapGetters({
            authInfo: 'authInfo',
            comments: 'sns/comments'
        })
    },
    mounted() {
        this.postId = this.$route.params.id;
        this.$http.get(`/api/sns/detail/${this.postId}`)
        .then((res)=>{
            console.log(res.data)
            this.item = res.data.post[0]
            this.commentList = res.data.comment
        })
    },
    methods: {
        ...mapMutations({
            setComments: 'sns/setComments'
        }),
        getProfileImgUrl(file) {
            let src = require.context('@/assets/img/user/', false, /\.png$/)
            return src('./'+file+'.png')
        },
        getPostImgUrl(file) {
            let src = require.context('@/assets/img/photo/', false, /\.jpeg$/)
            return src('./'+file)
        },
        writeComment () {
            if(this.authInfo.active){
                this.setComments({
                    comment: {
                        "post_id": this.postId,
                        "author": this.authInfo.id,
                        "content": this.comment
                    }
                });
                this.comment = ''
            }else{
                alert('로그인 후에 작성하실 수 있습니다.')
                this.$router.push({
                    name: 'AuthLogin'
                })
            }
        },
        goSnsList () {
            this.$router.push({
                name: 'SnsList'
            })
        }
    }
}
</script>

<style></style>