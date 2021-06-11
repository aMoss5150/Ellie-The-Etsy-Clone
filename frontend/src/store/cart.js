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
        console.log(cart)
        dispatch(getCart(cart));
    }
    else { // if cart doesnt exist... create it
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
    // if (!cartLS) { //if the cart is empty
    //     const cartObj = {"items": []}
    //     cartObj["items"].push(itemId)
    //     JSON.stringify(cartObj)
    //     localStorage.setItem('cart',cartObj) // does it need a key or can I imply?
    //     dispatch(addItem(itemId))
    // } else {
        if (cartLS) {
        console.log(cartLS);
        let parsedCart = JSON.parse(cartLS)
        console.log(parsedCart);
        parsedCart.push(itemId)
        let stringedCart = JSON.stringify(parsedCart)
        localStorage.setItem('cart', stringedCart )
        dispatch(addItem(itemId))
    } else if (!cartLS)
        console.log("error in cart from addItemLS in store/cart");
}


//initial state variables
let initCart = []
const initialState = [23,6,35,7,3,2];


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