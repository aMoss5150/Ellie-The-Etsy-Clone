
//actions
export const LOAD = "products/LOAD";


//action creators
const load = list => ({
    type: LOAD,
    list
});


//!Thunk ACTION CREATORS
//this will fetch all products to be rendered on homePage
export const getProducts = () => async (dispatch) => {
    const res = await fetch(`/api/products`);
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
            action.list.forEach(product => {
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