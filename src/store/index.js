import {createStore} from 'vuex'

import ProductStore from './Product/ProductStore'

const store = createStore({
    modules:{
        ProductStore
    }
})

export default store