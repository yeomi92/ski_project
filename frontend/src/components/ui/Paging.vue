<template>
    <div class="outer_div">
        <div class="inner_div">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"
                        v-for="(num, index) in startNum"
                        v-if="pagingRangeCheck(num, index)"
                        :class="pagingClass(num)"
                        @click="movePage(num)"
                        :key="num"  
                    >
                        <a class="page-link" href="#">{{num}}</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Paging',
    created() {
        console.log('ui/Paging.vue');
        console.log(this.$route);
    },
    props: {
        page_num: {
            type: Number,
            required: true
        },
        total_page_num: {
            type: Number,
            required: true
        },
        row_num: {
            type: Number,
            required: true
        }
    },
    computed: {
        startNum () {
            let startNum = (parseInt(this.page_num / 10) - (this.page_num % 10 === 0 ? 1 : 0)) * 10 + 1;
            const arr = [];
            for (let i = 0; i < 10; i++) {
                arr[i] = startNum++;
            }
            console.log(arr)
            return arr;
        }
    },
    methods: {
        pagingRangeCheck (num, index) {
            return num <= this.total_page_num && index < 10
        },
        pagingClass (num) {
            return {
                'current-page': num === this.page_num
        }
        },
        moveFirstPage () {
            this.$router.push({
                params: {
                page: 1
                },
                query: this.$route.query
            })
        },
        movePreviousPage () {
            this.$router.push({
                params: {
                page: (this.page_num - 1 >= 1 ? this.page_num - 1 : 1)
                },
                query: this.$route.query
            })
        },
        movePage (num) {
            this.$router.push({
                params: {
                page: num
                },
                query: this.$route.query
            })
        },
        moveNextPage () {
            this.$router.push({
                params: {
                page: (this.page_num + 1 <= this.total_page_num ? this.page_num + 1 : this.page_num)
                },
                query: this.$route.query
            })
        },
        moveLastPage () {
            this.$router.push({
                params: {
                page: this.total_page_num
                },
                query: this.$route.query
            })
        }
    }
}
</script>
<style lang="scss">

</style>


