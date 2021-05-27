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
//product will be fetched and passed in from 
// item button to add to cart

export const getCartLS = () => async (dispatch) => {
    const cartLS = localStorage.getItem('cartObj')
    const products = await JSON.parse(cartLS)

    dispatch(getCart(products));

};


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