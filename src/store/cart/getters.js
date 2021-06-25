export default {
    footIfor: state => {
        let { listCart } = state;
        let initObjSum = { countItem: 0, totalPrice: 0 }

        return listCart.reduce(function(objSum, objCart) {
            let countItems = objSum.countItem + objCart.quantity;
            let totalPrices = objSum.totalPrice + objCart.product.price * objCart.quantity;
 		if (typeof(totalPrices) === 'undefined') {
                return totalPrices = 0
            }
            return { countItems, totalPrices }

        }, initObjSum)
    }
}