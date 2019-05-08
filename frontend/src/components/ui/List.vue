<template>
<div class="list">
    <div class="list_head">
        <div class="list_tr">
            <div class="list_th list_no">No.</div>
            <div class="list_th" v-for="(head, i) in headList" :key="i" :style="dynamicStyle(i)">{{head.text}}</div>
        </div>
    </div>
    <div class="list_body" v-if="bodyList.length>0">
        <div class="list_tr" v-for="(body,index) in bodyList" :key="index"> 
            <div class="list_td list_no">{{setIndexNum(index)}}</div>
            <div class="list_td" v-for="(cell,i) in cellFilters" :key="i" :style="dynamicStyle(i)" @click="cell.click(body)">{{body[cell.key]}}</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'List',
    props: {
        width: {
            type: Array,
            required: true
        },
        align: {
            type: Array,
            required: true
        },
        headList: {
            type: Array,
            required: true
        },
        bodyList: {
            type: Array,
            required: true
        },
        cellFilters: {
            type: Array,
            required: true
        },
        pagingData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            bodyKeys: []
        }
    },
    created () {
        console.log('ui/List.vue')       
    },
    mounted () {
    },
    methods: {
        dynamicStyle (i) {
            return {
                width: this.width[i]+'%',
                'text-align': this.align[i]
            }
        },
        setIndexNum (index) {
            return (this.pagingData.total_cnt - (this.pagingData.page_num - 1) * this.pagingData.row_num) - index
        }
    }

}
</script>
<style>
</style>


