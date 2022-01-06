import { csrfFetch } from './csrf';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//!REFACTOR FOR TOOLKIT

const initialState = {}

export const getProducts = createAsyncThunk("products/getProducts", async (dispatch) => {
    const res = await csrfFetch('/api/products');
    //! need to be refactored into EXTRAREDUCERS
    if (res.ok) {
        const products = await res.json();
        //! do not call Dispatch HERE
        dispatch(load(products));
    }
});



//!END OF REFACTOR FOR TOOLKIT




//actions
const LOAD = "products/LOAD";



//action creators
const load = (products) => ({
    type: LOAD,
    products
});


//!Thunk ACTION CREATORS
//this will fetch all products to be rendered on homePage
export const getProducts = () => async (dispatch) => {
    const res = await csrfFetch('/api/products');
    if (res.ok) {
        const products = await res.json();
        dispatch(load(products));
    }
};
//initial state variables
const initialState = {};

//PRODUCTS REDUCER
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allProducts = {};
            action.products.forEach(product => {
                allProducts[product.id] = product;
            });

            return {
                ...allProducts,
                ...state
            };
        }

        default: {
            return state
        }
    }
}

export default productsReducer;