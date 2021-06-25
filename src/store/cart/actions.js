export default {
    actBuyProduct({ commit, state }, data) {

        const index = state.listCart.findIndex(cart => {
            return cart.product.id === data.product.id
        });
        if (index === -1) {
            commit('BUY_PRODUCT', data)
        } else {
            let quantity = data.quantity;
            commit('CHANG_QUATITY', { index, quantity })
        }
    }
}