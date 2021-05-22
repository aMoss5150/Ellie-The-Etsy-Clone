
//actions
const LOAD = "cart/LOAD";
const ADD_ITEM = 'cart/ADD_ITEM'
const REMOVE_ITEM = 'cart/REMOVE_ITEM'
const EMPTY = 'cart/EMPTY'

//action creators

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


//!Thunk ACTION CREATORS
//product will be fetched and passed in from 
// item button to add to cart


//initial state variables
const initialState = {};


//CART REDUCER
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
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