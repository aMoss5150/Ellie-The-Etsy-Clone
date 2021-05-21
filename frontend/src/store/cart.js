
//actions
export const LOAD = "cart/LOAD";
export const ADD_ITEM = 'cart/ADD_ITEM'

//action creators

export const addItem = (itemId) => ({
    type: ADD_ITEM,
    itemId
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
            }  //return state to cart
        default: {
            return state
        }
    }

}

export default cartReducer;