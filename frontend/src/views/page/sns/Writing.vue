<template>
    <div>
        <div>
            <input type="text" v-model="post.content"/>
            <input type="file" id="file" ref="myFiles" @change="previewFiles" multiple />
        </div>
        <button value="save" @click="save">저장</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            post: {
                content:'',
                photo: []
            },
            files: []
        }
    },
    methods: {
        save () {
            console.log(this.post)
            let date = new Date()
        },
        previewFiles () {
            this.post.photo = this.$refs.myFiles.files
        }
    }
}
</script>
<style>

</style>

