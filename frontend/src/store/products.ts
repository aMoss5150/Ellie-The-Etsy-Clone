import { csrfFetch } from './csrf';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//!REFACTOR FOR TOOLKIT
//------------------------------------------------------------
// slice type definition
type SliceState = { products: Array<Product> }

// Product definition for slice state
export interface Product {
    id: number
    price: number
    product_name: string
    labor_estimate: number
    image_url: string
    product_type: string
    product_description: string
}

// assign slicestate type to initial state here
const initialState: SliceState = {
    products: []
}
const name = "products"


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await csrfFetch('/api/products');

        if (res.ok) {
            const data = await res.json();
            return data
        }
    });

const productsSlice = createSlice({
    name,
    initialState,
    reducers: {
        // getProducts: (state) => {
        //     try {
        //         const allProducts = {};
        //         state.forEach(product => {
        //             allProducts[product.id] = product;
        //         });
        //         state = allProducts
        //     } catch (err) {
        //         console.error(`There was an error getting products: ${err}`)
        //     }
        // }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            //! prior use of object
            // const allProducts = {};
            // action.payload.forEach(product => {
            //     allProducts[product.id] = product;
            // });
            // // state = { allProducts }
            // state.products = allProducts

            //* now using array
            state.products.length = 0

            action.payload.forEach((product: Product) => {
                state.products.push(product);
            });
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.error('Promise rejected')
        })

    }

})

//!END OF REFACTOR FOR TOOLKIT
//------------------------------------------------------------------


//*ORIGINAL BEFORE REFACTOR



// //actions
// const LOAD = "products/LOAD";



// //action creators
// const load = (products) => ({
//     type: LOAD,
//     products
// });


// //!Thunk ACTION CREATORS
// //this will fetch all products to be rendered on homePage
// export const getProducts = () => async (dispatch) => {
//     const res = await csrfFetch('/api/products');
//     if (res.ok) {
//         const products = await res.json();
//         dispatch(load(products));
//     }
// };
// //initial state variables
// const initialState = {};

// //PRODUCTS REDUCER
// const productsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOAD: {
//             const allProducts = {};
//             action.products.forEach(product => {
//                 allProducts[product.id] = product;
//             });

//             return {
//                 ...allProducts,
//                 ...state
//             };
//         }

//         default: {
//             return state
//         }
//     }
// }

//* END ORIGINAL BEFORE REFACTOR

// export const { getProducts } = productsSlice.actions
export default productsSlice.reducer;