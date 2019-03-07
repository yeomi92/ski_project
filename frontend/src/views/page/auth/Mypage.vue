<template>
    <div class="mypage">
        <div class="title">마이페이지</div>
        <b-table :items="items" :fields="fields"/>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Mypage',
    created() {
        this.items.push(this.authInfo)
    },
    data() {
        return{
            fields: ['id', 'name', 'email', 'active'],
            items: []
        }
    },
    computed: {
        ...mapGetters({
            authInfo: 'authInfo'
        })
    }
}
</script>
<style>

</style>

