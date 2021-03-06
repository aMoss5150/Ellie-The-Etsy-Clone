// import { useDispatch } from 'react-redux'
import { createSlice } from "@reduxjs/toolkit"

//*REFACTOR FOR TOOLKIT

// -----------------------SLICE------------------------------

const initialState = []

const name = "cart"

const cartSlice = createSlice({
    name,
    initialState,
    reducers: {
        getCartLS: (state) => {

            try {
                state.length = 0
                let cart = []
                const cartLS = localStorage.getItem('cart') ? localStorage.getItem('cart') : false

                if (cartLS) { // if cart exists... get it
                    cart = JSON.parse(cartLS)
                    cart.forEach(id => state.push(id))
                }

                else if (!cartLS) { // if cart doesnt exist... create it
                    let stringedCart = JSON.stringify(cart)
                    localStorage.setItem('cart', stringedCart)
                }

            } catch (err) {
                console.error(`There was an error retrieving cart: ${err}`)
            }
        },
        addItemLS: (state, action) => {

            try {
                const cartLS = localStorage.getItem('cart') ? localStorage.getItem('cart') : false

                if (cartLS) {
                    let parsedCart = JSON.parse(cartLS)
                    parsedCart.push(action.payload)
                    let stringedCart = JSON.stringify(parsedCart)
                    localStorage.setItem('cart', stringedCart)
                    state.push(action.payload)

                } else if (!cartLS) { // if cart doesnt exist... create it
                    let cart = []
                    cart.push(action.payload)
                    let stringedCart = JSON.stringify(cart)
                    localStorage.setItem('cart', stringedCart)
                    state.length = 0
                    state.push(action.payload)
                }

            } catch (err) {
                console.error(`There was an error adding to cart: ${err}`)
            }
        },

        removeItemLS: (state, action) => {

            try {
                const cartLS = localStorage.getItem('cart') ? localStorage.getItem('cart') : false

                if (cartLS) {
                    let parsedCart = JSON.parse(cartLS)
                    let spliceIndex = parsedCart.indexOf(action.payload)
                    let spliceIndexStore = state.indexOf(action.payload)
                    parsedCart.splice(spliceIndex, 1)
                    state.splice(spliceIndexStore, 1)
                    let stringedCart = JSON.stringify(parsedCart)
                    localStorage.setItem('cart', stringedCart)
                }

            } catch (err) {
                console.error(`There was an error removing item from cart: ${err}`)
            }
        }
    }
})
// ------------------------THUNKS----------------------------



export const { getCartLS, addItemLS, removeItemLS } = cartSlice.actions
export default cartSlice.reducer


//! END REFACTOR FOR TOOLKIT








// //actions
// const LOAD = "cart/LOAD";
// const ADD_ITEM = 'cart/ADD_ITEM'
// const REMOVE_ITEM = 'cart/REMOVE_ITEM'
// const EMPTY = 'cart/EMPTY'

// //action creators

// export const getCart = (cart) => ({
//     type: LOAD,
//     cart
// })

// export const addItem = (itemId) => ({
//     type: ADD_ITEM,
//     itemId
// })

// export const removeItem = (itemId) => ({
//     type: REMOVE_ITEM,
//     itemId
// })

// export const emptyCart = () => ({
//     type: EMPTY
// })


// // product will be fetched and passed in from 
// // item button to add to cart

// export const getCartLS = () => async (dispatch) => {
//     const cartLS = localStorage.getItem('cart') ? localStorage.getItem('cart') : false
//     if (cartLS) { // if cart exists... get it
//         let cart = JSON.parse(cartLS)
//         dispatch(getCart(cart));
//     }
//     else if (!cartLS) { // if cart doesnt exist... create it
//         let cart = []
//         let stringedCart = JSON.stringify(cart)
//         localStorage.setItem('cart', stringedCart)
//         dispatch(getCart(cart))
//         return
//     }
//     return
// };


// export const addItemLS = (itemId) => async (dispatch) => {
//     const cartLS = localStorage.getItem('cart') ? localStorage.getItem('cart') : false
//     if (cartLS) {
//         let parsedCart = JSON.parse(cartLS)
//         parsedCart.push(itemId)
//         let stringedCart = JSON.stringify(parsedCart)
//         localStorage.setItem('cart', stringedCart)
//         dispatch(addItem(itemId))
//     } else if (!cartLS) { // if cart doesnt exist... create it
//         let cart = []
//         cart.push(itemId)
//         let stringedCart = JSON.stringify(cart)
//         localStorage.setItem('cart', stringedCart)
//         dispatch(getCart(cart))
//         return
//     }
// }

// export const removeItemLS = (itemId) => async (dispatch) => {
//     const cartLS = localStorage.getItem('cart') ? localStorage.getItem('cart') : false
//     if (cartLS) {
//         let parsedCart = JSON.parse(cartLS)
//         let spliceIndex = parsedCart.indexOf(itemId)
//         parsedCart.splice(spliceIndex, 1)
//         let stringedCart = JSON.stringify(parsedCart)
//         localStorage.setItem('cart', stringedCart)
//         dispatch(removeItem(itemId))
//         return
//     }
// }
// //initial state variables

// const initialState = [];


// //CART REDUCER
// const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOAD: {
//             const newState = []
//             action.cart.forEach((productId) => {
//                 newState.push(productId)
//             })
//             return newState
//         }
//         case ADD_ITEM: {
//             const newState = [...state]
//             newState.push(action.itemId)
//             return newState
//         }
//         case REMOVE_ITEM: {
//             const newState = [...state]
//             let spliceIndex = newState.indexOf(action.itemId)
//             newState.splice(spliceIndex, 1)
//             return newState
//         }

//         case EMPTY: {
//             const newState = []
//             return newState
//         }

//         default: {
//             return state
//         }
//     }
// }
// export default cartReducer;