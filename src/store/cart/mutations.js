export default {
    CHANG_QUATITY: (state, { index, quantity }) => {
        state.listCart[index].quantity += quantity
    },
    BUY_PRODUCT: (state, data) => {
        state.listCart.push(data)
    }
}