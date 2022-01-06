import { csrfFetch } from './csrf';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//!REFACTOR FOR TOOLKIT

const initialState = {}
const name = "products"

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await csrfFetch('/api/products');

        if (res.ok) {
            const products = await res.json();
            return products
        }
    });

const productsSlice = createSlice({
    name,
    initialState,
    reducers: {
        getProducts: (state, action) => {
            try {
                const allProducts = {};
                action.products.forEach(product => {
                    allProducts[product.id] = product;
                });
                state = allProducts
            } catch (err) {
                console.error(`There was an error getting products: ${err}`)
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.error(action.payload)
        })

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