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

</style>

