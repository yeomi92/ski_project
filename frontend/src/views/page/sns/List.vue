<template>
<div>
    <div v-for="post in posts" :key="post.id">
        <div class="profile">
            <img :src="getImgUrl(post.author)" width="50">
            <span class="user">{{post.author}}</span>
        </div>
        <div>{{post.date}}</div>
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
        getImgUrl(file) {
            let src = require.context('@/assets/img/user/', false, /\.png$/)
            return src('./'+file+'.png')
        }
    }
}
</script>
<style>

</style>

