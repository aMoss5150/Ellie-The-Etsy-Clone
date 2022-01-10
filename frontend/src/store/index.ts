import { createStore, combineReducers, configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import sessionReducer from './session';
import productsReducer from './products';
import reviewsReducer from './reviews';
import cartReducer from './cart';

// no longer using this
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

//* Redux toolkit INCLUDES thunk and logger so no need for this

// //ALLOWS FOR REDUX LOGGIN if REDUX IS INSTALLED
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

// !THIS NEEDS TO BE ADDED IN ORDER FOR ROOTSTATE TO BE RECOGNIZED APP WIDE


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
