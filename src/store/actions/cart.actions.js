export function addToCart(item) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_CART',
            item
        })
    }
}
export function removeFromCart(itemId) {
    return (dispatch) => {
        dispatch({
          type: "REMOVE_FROM_CART",
          itemId,
        })
    }
}
