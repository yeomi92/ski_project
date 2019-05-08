<script>
export default {
    data () {
        return {
            pagingData: {
                page_num: -1,
                row_num: -1,
                sort_column: '',
                sort_type: -1,
                total_cnt: -1,
                total_page_num: -1
            }
        }
    },
    methods: {
        setPagingData (payload) {
            console.log(payload)
            Object.keys(payload).forEach(key => {
                this.pagingData[key] = payload[key]
            })
        }
    }
}
</script>