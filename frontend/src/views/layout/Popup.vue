<template>
    <transition name="popup">
        <div id="popup">
            <div class="popup">
                <div class="header">
                    <div class="title">{{title}}</div>
                    <div class="close_btn" @click="popupClose">X</div>
                </div>
                <div class="body">
                    <component
                        :is="useComponent"
                    />
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import TermsOfSignup from '@/views/popup/TermsOfSignup'
export default {
    name: 'Popup',
    components: {
        TermsOfSignup
    },
    computed: {
        ...mapGetters({
            title: 'popup/title',
            useComponent: 'popup/useComponent'
        })
    },
    methods:{
        ...mapMutations({
            popupClose: 'popup/close'
        }),
        close(){
            console.log('팝업 닫기')
            popupClose();
        }
    }
}
</script>
<style>

</style>


