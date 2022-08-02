const initialState = {
    cart:[],
}
export function cartReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case 'ADD_TO_CART':
            newState = {cart:[...state.cart, action.item]}
            break
        case 'REMOVE_FROM_CART':
            const cart = state.cart.filter(item => item._id !== action.itemId)
            newState = { cart}
            break
        default:
    }
    return newState
}
