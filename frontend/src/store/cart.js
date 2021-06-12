// import { useDispatch } from 'react-redux'

//actions
const LOAD = "cart/LOAD";
const ADD_ITEM = 'cart/ADD_ITEM'
const REMOVE_ITEM = 'cart/REMOVE_ITEM'
const EMPTY = 'cart/EMPTY'

//action creators

export const getCart = (cart) => ({
    type: LOAD,
    cart
})

export const addItem = (itemId) => ({
    type: ADD_ITEM,
    itemId
})

export const removeItem = (itemId) => ({
    type: REMOVE_ITEM,
    itemId
})

export const emptyCart = () => ({
    type: EMPTY
})



//! thunks unnecessary as ONLY products and reviews will be in the DB
// product will be fetched and passed in from 
// item button to add to cart

export const getCartLS = () => async (dispatch) => {
    const cartLS = localStorage.getItem('cart') ? localStorage.getItem('cart') : false
    if (cartLS) { // if cart exists... get it
        let cart = JSON.parse(cartLS)
        dispatch(getCart(cart));
    }
    else if(!cartLS) { // if cart doesnt exist... create it
        let cart = []
        let stringedCart = JSON.stringify(cart)
        localStorage.setItem('cart',stringedCart)
        dispatch(getCart(cart))
        return
    }
    return
};


export const addItemLS = (itemId) => async (dispatch) => {
    const cartLS = localStorage.getItem('cart') ? localStorage.getItem('cart') : false
        if (cartLS) {
        let parsedCart = JSON.parse(cartLS)
        parsedCart.push(itemId)
        let stringedCart = JSON.stringify(parsedCart)
        localStorage.setItem('cart', stringedCart )
        dispatch(addItem(itemId))
    }  else  if(!cartLS) { // if cart doesnt exist... create it
        let cart = []
        cart.push(itemId)
        let stringedCart = JSON.stringify(cart)
        localStorage.setItem('cart',stringedCart)
        dispatch(getCart(cart))
        return
    }
}


//initial state variables

const initialState = [];


//CART REDUCER
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const newState = [...state]
            action.cart.forEach((productId)=> {
                newState.push(productId)
            })
            return newState
        }
        case ADD_ITEM: {
            const newState = [...state]
            newState.push(action.itemId)
            return newState
        }
        case REMOVE_ITEM: {
            const newState = [ ...state ]
            let spliceIndex = newState.indexOf(action.itemId)
            newState.splice(spliceIndex, 1)
            return newState
        }

        case EMPTY: {
            const newState = []
            return newState
        }

        default: {
            return state
        }
    }
}
export default cartReducer;