import { csrfFetch } from './csrf';

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
            // console.log('action.product.products', action.products.products)
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