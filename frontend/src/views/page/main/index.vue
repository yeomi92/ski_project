<template>
<div>
    <div>메인페이지</div>
    <div v-if="authInfo.active">{{authInfo.name}}님 환영합니다.</div>
    <div v-if="!authInfo.active">로그인하세요.</div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'MainIndex',
    computed: {
        ...mapGetters({
            authInfo: 'authInfo'
        })
    },
    created() {
        console.log('main/Index.vue')
    }
}
</script>
