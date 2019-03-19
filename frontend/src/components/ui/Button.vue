<template>
    <div class="div_button">
        <input 
        type="button" 
        :value="text"
        :class="dynamicClass"
        :style="dynamicStyle"
        :disabled="disabled"
        @click.prevent="clicked"
        />
    </div>
</template>
<script>
export default {
    name: 'inputButton',
    props: {
        text: {
            type: String,
            required: true
        },
        bgColor: {
            type: String
        },
        width: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        dynamicClass () {
            let className = {
                [this.bgColor]: true
            }
            return className
        },
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


