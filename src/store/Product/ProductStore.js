import productServices from "../../services/ProductServices";

const state = {
    data: []
}

const getters = {
    //amik cons state dan state.data
    data: state => state.data
}

const mutations = {
    //nama function dgn parameter refer dalam commit
    setData(state,responseData) {
        state.data = responseData
    }
}

const actions = {
    async getProductCategory({commit}) {
        //import productservices.nama function
        let response = await productServices.getProductCategory()
        console.log('response', response)
        //commit mutation
        commit('setData',response.data)
    }
}

//export default 
export default {
    state,
    getters,
    mutations,
    actions
}