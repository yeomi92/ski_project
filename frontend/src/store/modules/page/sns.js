export default {
    namespaced: 'sns',
    state: {
        commentId: 10,
        comments: []
    },
    getters: {
        comments: state => state.comments
    },
    mutations: {
        setComments(state, payload) {
            payload.comment.id = 'cmt'+(++state.commentId)
            state.comments.push(payload.comment)
        }
    }
}