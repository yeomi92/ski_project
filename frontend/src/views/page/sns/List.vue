<template>
<div class="post_list">
<div class="row">
    <div v-for="post in posts" :key="post.id" class="col-md-4 post" style="margin: 20px 0px;">
        <div style="text-align:center;">
            <div class="profile">
                <img :src="getProfileImgUrl(post.author)" width="30">
                <span class="user">{{post.author}}</span>
                <span>{{post.date}}</span>
            </div>
            <div class="thumbnail">
                <img :src="getPostImgUrl(post.photo)" width="300" height="200" @click="goDetail(post.id)">
            </div>
        </div>
    </div>
</div>
<div class="btn_writePost">
        <button type="button" value="목록" class="btn btn-primary btn_write" @click="goWriting">글작성</button>
    </div>
    </div>
</template>
<script>
export default {
    name: 'SnsList',
    data () {
        return {
            posts: []
        }
    },
    created () {

    },
    mounted () {
        this.$http.get('/api/sns/list')
        .then((res)=>{
            console.log(res.data)
            this.posts=res.data
        })
    },
    methods:{
        getProfileImgUrl(file) {
            let src = require.context('@/assets/img/user/', false, /\.png$/)
            return src('./'+file+'.png')
        },
        getPostImgUrl(file) {
            let src = require.context('@/assets/img/photo/', false, /\.jpeg$/)
            return src('./'+file)
        },
        goDetail(id) {
            this.$router.push({
                name: 'SnsDetail',
                params: {
                    id: id
                }
            })
        },
        goWriting () {
            this.$router.push({
                name:'SnsWriting'
            })
        }
    }
}
</script>
<style>

</style>

