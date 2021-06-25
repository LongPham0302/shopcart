import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import modulesCart from './cart'
import modulesProduct from './product'

Vue.use(Vuex)
    // const myPlugin = store => {
    //     // called when the store is initialized
    //     store.subscribe((mutation, state) => {
    //         // called after every mutation.
    //         // The mutation comes in the format of `{ type, payload }`.
    //         console.log(mutation, 'và', state)
    //     })
    // }
const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations,
    getters,
    actions,
    modules: {
        cart: modulesCart,
        product: modulesProduct,
    },
    // plugins: [myPlugin]
})

export default store;