export default {
    namespaced: true,
    // 重要信息：state 必须是一个函数，
    // 因此可以创建多个实例化该模块
    state: {
        msg: "init"
    },
    actions: {
        inc: ({ commit }, m) => {
            console.log(commit)
            commit('incc', m)
        }
    },
    mutations: {
        incc: (state, m) => {
            console.log(m)
            state.msg = m
        }
    }
}