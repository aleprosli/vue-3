import axios from "axios"
export default {
    getProductCategory() {
        return axios.get('https://dummyjson.com/products/categories')
    }
}