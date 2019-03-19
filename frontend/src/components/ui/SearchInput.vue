<template>
    <div class="search_input">
        <input type="text" placeholder="search text" v-model="searchText">
        <input type="button" value="search" @click="search">
    </div>
</template>
<script>
export default {
    name: 'SerachInput',
    data() {
        return {
            searchText: '',
        }
    },
    props: {
        search: {
            Type: JSON
        }
    },
    created() {
        console.log('ui/SerachInput.vue')
    },
    methods: {
        search() {
            alert(this.searchText)
        }
    }
}
</script>
<style lang="scss">
</style>


