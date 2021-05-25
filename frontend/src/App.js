import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import ProductTypePage from "./components/ProductTypePage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { getProducts } from '../src/store/products'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  //IMPORT THE PRODUCTS FROM THE STORE
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getProducts())
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

          <Route path="/:productType/:productId">
            <ProductDetails products={products} />
          </Route>

          <Route path="/:productType">
            <ProductTypePage products={products} />
          </Route>

          <Route>
            Page Not Found
          </Route>

        </Switch>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
  reviews: state.reviews,
  session: state.session
})

export default connect()()App;