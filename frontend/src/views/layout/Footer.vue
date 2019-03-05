<template>
    <div class="footer">
        <a href="mailto:hsyeom92@gmail.com" class="email">{{email}}</a>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    data(){
        return {
            email: 'hsyeom92@gmail.com'
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

