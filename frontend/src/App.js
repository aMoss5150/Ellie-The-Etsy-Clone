import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import ProductTypePage from "./components/ProductTypePage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { getProducts } from '../src/store/products'

function App({ products }) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  //! DONT useSelector PRODUCTS HERE OR IT
  //! WILL RUN EVERY TIME SOMETHING HAPPENS
  //! SLOW, only useSelector on pages that need products

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    // dispatch(getProducts())
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route path="/login">
            <LoginFormPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route exact path="/">
            <HomePage products={products} />
          </Route>

          <Route path="/products/:productType/:productId">
            <ProductDetails products={products} />
          </Route>

          <Route path="/products/:productType">
            <ProductTypePage products={products} />
          </Route>

          <Route>
            <h1>Page Not Found</h1>
          </Route>

        </Switch>
      )}
    </>
  );
}

//! MAPSTATETOPROPS reFACTORING----vvvvvvvvv
//! OLD WAY OF USING REACT.... NO LONGER NECESSARY
// const mapStateToProps = state => ({
//   session: state.session,
//   products: state.products,
//   reviews: state.reviews,
//   cart: state.cart
// })
//!------------^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default App;