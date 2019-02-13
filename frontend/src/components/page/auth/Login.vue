<template>
    <div>{{msg}}</div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            msg: '로그인페이지'
        }
    },
    created(){
        console.log('Login.vue')
    }

}
</script>
