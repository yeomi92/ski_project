export default {
    namespaced: true,
    state: {
        show: false,
        title: '타이틀이 없습니다.',
        useComponent: 'Index',
        closeInterceptor: null,
        props: {},
        callback: ()=>{}
    },
    getters: {
        show: state => state.show,
        title: state => state.title,
        useComponent: state => state.useComponent
    },
    mutations: {
        show(state, payload) {
            state.show = true,
            state.title = payload.title,
            state.useComponent = payload.useComponent
        },
        close(state){
            state.show = false,
            state.title = '타이틀이 없습니다',
            state.useComponent = 'Index'
        }
    }
}