<template>
    <div class="search_input">
        <select v-model="searchType.selected">
            <option v-for="(option, i) in searchType.options" :key="i" :value="option.value">{{option.text}}</option>
        </select>
        <input type="text" placeholder="search text" v-model="search.text">
        <input type="button" value="검색" @click="searchData">
    </div>
</template>
<script>
export default {
    name: 'SerachInput',
    data() {
        return {
            search: {
                text: null,
                type: null
            }
        }
    },
    props: {
        searchType: {
            Type: JSON
        }
    },
    methods: {
        searchData() {
            this.search.type = this.searchType.selected
            this.$emit('clicked', this.search)
        }
    }
}
</script>
<style lang="scss">
</style>


