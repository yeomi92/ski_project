<template>
    <input class="input_button"
    type="button" 
    :value="text"
    :style="dynamicStyle"
    @click.prevent="clicked"
    />
</template>
<script>
export default {
    name: 'inputButton',
    props: {
        text: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: null
        }
    },
    computed: {
        dynamicStyle () {
            let style = {
                width: this.width
            }
            return style
        },
        clicked () {
            this.$emit('clicked')
        }
    }
}
</script>
<style>

</style>


