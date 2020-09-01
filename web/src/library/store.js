const state = {
    isLoginShow:false,
    isRegisterShow:false,
}
const mutations = {
    loginShow(state){
        state.isLoginShow = !state.isLoginShow
    },
    registerShow(state){
        state.isRegisterShow = !state.isRegisterShow
    }
}

export  {
    state,
    mutations
}