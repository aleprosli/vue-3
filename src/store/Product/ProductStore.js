import productServices from "../../services/ProductServices";

const state = {
    data: []
}

const getters = {
    data: state => state.data
}

const mutations = {
    setData(state,data) {
        state.data = data
    }
}

const actions = {
    async getProductCategory({commit}) {
        let response = await productServices.getProductCategory()
        console.log('response', response)
        commit('setData',response.data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}