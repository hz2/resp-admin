
import { createStore, createLogger } from 'vuex'

import products from './modules/products'
const debug = import.meta.env.MODE !== 'production'

// Create a new store instance.
const store = createStore({
  modules: {
    products
  },
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})


export default store