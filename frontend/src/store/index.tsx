import { createStore, combineReducers, configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import sessionReducer from './session';
import productsReducer from './products';
import reviewsReducer from './reviews';
import cartReducer from './cart';

import thunk from "redux-thunk";


//ADD ANY OTHER REDUCERS HERE!!
const rootReducer = combineReducers({
  session: sessionReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  cart: cartReducer
});

const store = configureStore({
  reducer: rootReducer
})

// //ENHANCER DECLARATION
// let enhancer;


// //ALLOWS FOR REDUX LOGIN if REDUX IS INSTALLED
// if (process.env.NODE_ENV === "production") {
//   enhancer = applyMiddleware(thunk);
// } else {
//   const logger = require("redux-logger").default;
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   enhancer = composeEnhancers(applyMiddleware(thunk, logger));
// }


// //THIS IS CREATING THE STORE AND ADDING THE MIDDLEWARE TO ALLOW LOGGING
// const configureStore = (preloadedState) => {
//   return createStore(rootReducer, preloadedState, enhancer);
// };

// const store = configureStore()

export type DefaultRootState = ReturnType<typeof store.getState>


export default store;
