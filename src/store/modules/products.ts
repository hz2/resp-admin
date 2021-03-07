// initial state
const state = () => ({
    all: []
})

// getters
const getters = {}

// actions
const actions = {
    getAllProducts({ commit }) {
        setTimeout(() => {
            commit('setProducts', [])
        }, 300);
    }
}

// mutations
const mutations = {
    setProducts(state: { all: any }, products: any) {
        state.all = products
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
