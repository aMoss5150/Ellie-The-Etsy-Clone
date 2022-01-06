import { csrfFetch } from './csrf';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//!REFACTOR FOR TOOLKIT

const initialState = {}
const name = "products"

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (dispatch) => {
    const res = await csrfFetch('/api/products');
    //! need to be refactored into EXTRA REDUCERS
    if (res.ok) {
        const products = await res.json();
        //! do not call Dispatch HERE
        dispatch(load(products));
    }
});

const productsSlice = createSlice({
    name,
    initialState,
    reducers: {
        getProducts: (state, action) => {
            try { } catch (err) {
                console.error(`There was an error getting products: ${err}`)
            }
        }

    }

})

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