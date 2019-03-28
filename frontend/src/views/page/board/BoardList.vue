<template>
<div class="board">
    <div class="list_table">
        <div class="head">
            <serach-input
                :search="search"
            />
            <div v-show="authInfo.active">
                <input-button
                    :text="'글쓰기'"
                    :width="'100px'"
                    @clicked="goWriting"
                ></input-button>
            </div>
        </div>
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
import { mapGetters } from 'vuex'
import SearchInput from '@/components/ui/SearchInput'
import List from '@/components/ui/List'
import Paging from '@/components/ui/Paging'
import InputButton from '@/components/ui/InputButton'
export default {
    name: 'BoardList',
    components: {
        'serach-input': SearchInput,
        'paging': Paging,
        List,
        InputButton
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
                    { value: 'author', text: 'Author' }
                ]
            },
            width: [20,30,30,20,20,20],
            align: ['center','center','center','center','center','center'],
            headList: [
                {text:'Title'},
                {text:'Content'},
                {text:'Author'},
                {text:'Views'},
                {text:'CreateDate'},
                {text:'ModifyDate'}
            ],
            cellFilters: [
                {key:'title',
                click: (row) => {
                    console.log(row)
                    this.goDetail(row)
                }},
                {key:'content'},
                {key:'author'},
                {key:'views'},
                {key:'create_date'},
                {key:'mod_date'}
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
        ...mapGetters({
            authInfo: 'authInfo'
        }),
        startNo() {
            let data = this.pagingData;
            return data.total_cnt - (data.page_num - 1) * data.row_num
        }
    },
    created(){
        console.log('BoardList.vue');
        this.getList();
    },
    methods: {
        getList () {
            console.log('getList()')
            let page = this.$route.params.page;
            this.$http.get(`/api/board/${page}`)
            .then((res) => {
                console.log(res)
                let list = res.data.list
                this.list = list
                this.list.map((l) => {
                    l.author = `${l.author.nickname}(${l.author.id})`
                    l.create_date = l.create_date.split('T')[0]
                    l.mod_date = l.mod_date.split('T')[0]
                })
                this.pagingData.total_cnt = list.length
                this.pagingData.total_page_num = Math.ceil(list.length/10)
            });
        },
        goDetail (item) {
            console.log('goDetail');
            const params = {
                views: ++item.views
            }
            this.$http.put(`/api/board/update/${item._id}`, params)
            .then((res) => {
                console.log(res)
                this.$router.replace({
                    name: 'BoardDetail',
                    params: {
                        id: item._id
                    }
                })
            })
        },
        setPagingData (payload) {
            //보여지는 페이지를 세팅해주는 데이터(status, media_code, page_num, row_num, sort_column, sort_type, total_page_num)
            Object.keys(payload).forEach(key => {
                this.pagingData[key] = payload[key]
            })
        },
        goWriting () {
            this.$router.push({
                name: 'BoardWriting'
            })
        }
    }
}
</script>
<style lang="scss">

</style>
