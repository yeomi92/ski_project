<template>
    <div class="detail_table">
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Auth</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in content" :key="item.id">
                <td>{{item.title}}</td>
                <td>{{item.content}}</td>
                <td>{{item.auth}}</td>
                <td>{{item.date}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'BoardDetail',
    data(){
        return {
            content: []
        }
    },
    watch: {
        '$route' (to, from){
            this.$router.push({
                params: {
                    id: to.params.id
                }
            })
            this.getContent();
        }
    },
    created(){
        console.log('TestDetail.vue');
        this.getContent();
    },
    methods: {
        getContent(){
            var id = this.$route.params.id;
            this.$http.get(`/api/board/detail/${id}`)
            .then((response) => {
                this.content = response.data;
            });
        }
    }
}
</script>
<style lang="scss">
</style>
