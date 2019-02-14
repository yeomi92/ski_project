<template>
    <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
            <div>
                <b-form-select v-model="search.selected" :options="search.options"/>
            </div>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="searchList">Search</button>
        </form>
    </nav>
</template>
<script>
export default {
    name: 'SerachInput',
    data() {
        return {
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
        searchList() {
            console.log(this.search.selected)
        }
    }
}
</script>
<style lang="scss">

</style>


