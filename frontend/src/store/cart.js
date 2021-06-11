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
        let cart = await JSON.parse(cartLS)
        dispatch(getCart(cart));
    }
    else { // if cart doesnt exist... create it
        let cart = {"items": []}
        JSON.stringify(cart)
        localStorage.setItem('cart',cart)
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
        let parsedCart = JSON.parse(cartLS)
        parsedCart['items'].push(itemId)
        let stringedCart = JSON.stringify(parsedCart)
        localStorage.setItem('cart', stringedCart )
        dispatch(addItem(itemId))
    } else
        return "error in cart from addItemLS in store/cart"
}


//initial state variables
const fakeCart = { "items": [1,4,7,35] }
const initialState = {...fakeCart};


//CART REDUCER
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const newState = { ...state }
            action.cart["items"].forEach((productId)=> {
                newState['items'].push(productId)
            })
            return newState
        }
        case ADD_ITEM: {
            const newState = { ...state }
            newState["items"].push(action.itemId)
            return newState
        }
        case REMOVE_ITEM: {
            const newState = { ...state }
            let spliceIndex = newState["items"].indexOf(action.itemId)
            newState["items"].splice(spliceIndex, 1)
            return newState
        }

        case EMPTY: {
            const newState = {"items": []}
            return newState
        }

        default: {
            return state
        }
    }
}

export default cartReducer;