<template>
    <div>
    <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass" />
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Mypage',
    created() {
        console.log('mypage.vue')
        console.log(this.authInfo)
    },
    data() {
        return{
            fields: ['id', 'name', 'email', 'active'],
            items: this.authInfo
        }
    },
    computed: {
        ...mapGetters({
            authInfo: 'authInfo'
        })
    },
    methods: {
        rowClass(item, type) {
        if (!item) return
        if (item.status === 'awesome') return 'table-success'
      }
    }
}
</script>
<style>

</style>

