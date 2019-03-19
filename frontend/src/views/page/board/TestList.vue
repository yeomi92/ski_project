<template>
<div class="board">
    <div class="list_table">
    <serach-input
        :search="search"
    />
        <list
            :width="width"
            :align="align"
            :headList="headList"
            :bodyList="list"
            :cellFilters="cellFilters"
            :startNo="startNo"
        ></list>
        <paging
            v-if="list.length > 0"
            :page_num="pagingData.page_num"
            :total_page_num="pagingData.total_page_num"
            :row_num="pagingData.row_num"
        />
        <router-view/>
    </div>
</div>
</template>
<script>
import SearchInput from '@/components/ui/SearchInput'
import List from '@/components/ui/List'
import Paging from '@/components/ui/Paging'
export default {
    name: 'BoardList',
    components: {
        'serach-input': SearchInput,
        'paging': Paging,
        List
    },
    data(){
        return {
            msg: '게시판 페이지',
            list:[],
            pagingData: {
                //media_code: null,
                //status: null,
                page_num: 1, //현재 페이지
                row_num: 10, //몇개씩 보여줄 것인지
                //sort_column: 'name', //정렬 기준 컬럼
                sort_type: 'ASC', //내림차순, 오름차순
                total_cnt: null, 
                total_page_num: null
            },
            search: {
                selected: '',
                options: [
                    { value: '', text: 'All' },
                    { value: 'title', text: 'Title' },
                    { value: 'content', text: 'Content' },
                    { value: 'auth', text: 'Auth' }
                ]
            },
            width: [20,30,30,20],
            align: ['center','center','center','center'],
            headList: [
                {text:'Title'},
                {text:'Content'},
                {text:'Author'},
                {text:'Date'}
            ],
            cellFilters: [
                {key:'title'},
                {key:'content'},
                {key:'id'},
                {key:'title'}
            ]
        }
    },
    watch: {
        '$route' (to, from) {
            this.setPagingData({
                //status: !to.query.status ? null : to.query.status,
                //media_code: !to.query.media_code ? null : to.query.media_code,
                page_num: !to.params.page ? 1 : Number(to.params.page),
                //row_num: !to.query.row_num ? 10 : parseInt(to.query.row_num),
                row_num: 10,
                //sort_column: !to.query.sort_column ? 'name' : to.query.sort_column,
                sort_type: !to.query.sort_type ? 'ASC' : to.query.sort_type
            })

            //this.header.selectStatus.selectedValue = this.pagingData.status
            //this.header.selectMedia.selectedValue = this.pagingData.media_code

            //this.getWorkUnits()
            this.getList();
        }
    },
    computed: {
        startNo() {
            let data = this.pagingData;
            console.log(data.total_cnt)
            console.log(data.page_num)
            console.log(data.row_num)
            return data.total_cnt-(data.page_num-1)*data.row_num;
        }
    },
    created(){
        console.log('TestList.vue');
        this.getList();
    },
    methods: {
        getList(){
            console.log('getList()')
            let page = this.$route.params.page;
            this.$http.get(`/api/board/${page}`)
            .then((response)=>{
                let data=response.data;
                console.log(data.list)
                this.list=data.list;
                this.pagingData.total_cnt = data.total;
                this.pagingData.total_page_num = Math.ceil(data.total/10);
            });
        },
        goDetail(item){
            console.log('goDetail',item);
            this.$router.replace({
                name: 'BoardDetail',
                params: {
                   id: item.id
                }
            })
        },
        setPagingData (payload) {
            //보여지는 페이지를 세팅해주는 데이터(status, media_code, page_num, row_num, sort_column, sort_type, total_page_num)
            Object.keys(payload).forEach(key => {
                this.pagingData[key] = payload[key]
            })
        }
    }
}
</script>
<style lang="scss">

</style>
