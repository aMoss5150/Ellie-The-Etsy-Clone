import { useDispatch } from 'react-redux'

//actions
const LOAD = "cart/LOAD";
const ADD_ITEM = 'cart/ADD_ITEM'
const REMOVE_ITEM = 'cart/REMOVE_ITEM'
const EMPTY = 'cart/EMPTY'

//action creators

export const getCart = (products) => ({
    type: LOAD,
    products
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

export const getCartLS = (itemId) => async (dispatch) => {
    const cartLS = localStorage.getItem('cartObj')
    let products
    if (cartLS) {
        products = await JSON.parse(cartLS)
        dispatch(getCart(products));
    }
    else {

        console.log('cart doesnt exist in ls')
        return
    }
    console.log('success')
    return
};


export const addItemLS = (itemId) => async (dispatch) => {
    // const cartLS = localStorage.getItem('cartObj')
    // if (!cartLS) {
    //     const cartObj = {}
    //     cartObj[itemId] = itemId
    //     JSON.stringify(cartObj)
    //     localStorage.setItem('cartObj', cartObj)
    // }
    // let products

    // console.log(typeof cartLS)
    // // if (cartLS) {
    // //pull cart
    // products = await cartLS.json()
    // //add new item
    // if (products[itemId]) {
    //     products[itemId].count++
    // } else {
    //     products[itemId] = itemId
    // }
    // products = JSON.stringify(products)
    // localStorage.setItem({ 'cartObj': products })
    // dispatch(addItem(itemId))
    // dispatch(getCart(products))
    // // } else {
    // //     console.log('cart does not exist in ls')
    // //     return
    // // }
    // console.log('success')
    // return

    const fakeCart = { 1: { 1: 1 } }
    //!TESTING
    itemId = JSON.stringify(itemId)
    localStorage.setItem("fakeCart", { fakeCart: fakeCart })
    console.log('set success')
    let returnCart = localStorage.getItem('fakeCart')
    console.log('returnCart preparse:', returnCart, typeof returnCart)
    let parsedCart = JSON.parse(returnCart)
    console.log('returnCart postparse:', parsedCart, typeof parsedCart)


}


//initial state variables
const initialState = {};


//CART REDUCER
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const newState = { ...state, ...action.products }
            return newState
        }

        case ADD_ITEM:
            return {
                ...state,
                [action.itemId]: {
                    id: action.itemId
                }
            }

        case REMOVE_ITEM: {
            const newState = { ...state }
            delete newState[action.itemId]
            return newState
        }

        case EMPTY: {
            const newState = {}
            return newState
        }

        default: {
            return state
        }
    }
}

export default cartReducer;