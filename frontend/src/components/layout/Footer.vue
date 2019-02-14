<template>
    <div class="footer">hsyeom</div>
</template>
<script>
export default {
    name: 'Footer',
    data(){
        return {
            msg: 'footer입니다.'
        }
    },
    created(){
        console.log('layout/Footer.vue')
    }
}
</script>
<style>
.footer{
    background: #f8f9fa;
    text-align: right;
    height: 45px;
    /* vertical-align: middle; */
    bottom: 0;
    position: absolute;
    width: 100%;
    line-height: 45px;
}
</style>

