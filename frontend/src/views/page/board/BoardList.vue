<template>
<div class="board">
    <div class="list_table">
        <div class="head">
            <serach-input
                :searchType="search"
                @clicked="searchData"
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
            :pagingData="pagingData"
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
import { mapGetters, mapMutations } from 'vuex'
import SearchInput from '@/components/ui/SearchInput'
import List from '@/components/ui/List'
import Paging from '@/components/ui/Paging'
import InputButton from '@/components/ui/InputButton'
import ListMixin from '@/mixins/ListMixin'
export default {
    name: 'BoardList',
    components: {
        'serach-input': SearchInput,
        'paging': Paging,
        List,
        InputButton
    },
    mixins: [
        ListMixin
    ],
    data(){
        return {
            msg: '게시판 페이지',
            list: [],
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
            console.log('watch')
            console.log(to)
            console.log(from)
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
            this.getList();
        }
    },
    computed: {
        ...mapGetters({
            authInfo: 'authInfo'
        })
    },
    created(){
        this.getTotalListLength()
    },
    methods: {
        ...mapMutations({
            popupShow: 'popup/show'
        }),
        getTotalListLength (params) {
            this.$http.get('/api/board', {params: params})
            .then((res) => {
                this.pagingData.total_cnt = res.data.count
                this.pagingData.page_num = this.$route.params.page
                this.pagingData.row_num = 10
                this.getList(params)
            })
        },
        getList (params) {
            let page = this.$route.params.page;
            this.$http.get(`/api/board/${page}`, {params: params})
            .then((res) => {
                this.setList(res.data.list)
                
            });
        },
        goDetail (item) {
            console.log('item', item)
            const params = {
                views: ++item.views
            }
            this.$http.put(`/api/board/update/${item._id}`, params)
            .then((res) => {
                // this.$router.replace({
                //     name: 'BoardDetail',
                //     params: {
                //         id: item._id
                //     }
                // })
                this.popupShow({
                    title: '상세보기',
                    useComponent: 'BoardDetailForm',
                    props: {
                        item: item,
                        reload: this.getList
                    }
                })
            })
            
        },
        goWriting () {
            this.$router.push({
                name: 'BoardWriting'
            })
        },
        searchData (value) {
            let page = this.$route.params.page;
            const params = {
                type: value.type,
                text: value.text
            }
            this.getTotalListLength(params)
        },
        setList (res) {
            if(res.length > 0) {
                this.list = res
                this.list.map((l) => {
                    l.author = `${l.author.nickname}(${l.author.id})`
                    l.create_date = l.create_date.split('T')[0]
                    l.mod_date = l.mod_date.split('T')[0]
                })
                this.pagingData.total_page_num = Math.ceil(this.pagingData.total_cnt/10)
            } else {
                this.list
            }
        }
    }
}
</script>
<style lang="scss">

</style>
