import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import ProductTypePage from "./components/ProductTypePage";
import CartDisplay from "./components/CartDisplay";
import MiniCart from './components/MiniCart';



import Footer from "./components/Footer";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";


function App({ products }) {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  //! DONT useSelector PRODUCTS HERE OR IT
  //! WILL RUN EVERY TIME SOMETHING HAPPENS SLOW, 
  //! only useSelector on pages that need products


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));

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
            <MiniCart />
          </Route>

          <Route exact path="/">
            <HomePage products={products} />
            <MiniCart />
            <Footer />
          </Route>

          <Route path="/all-products/:productId">
            <ProductDetails products={products} />
            <MiniCart />
            <Footer />
          </Route>

          <Route path="/products/:productType">
            <ProductTypePage products={products} />
            <MiniCart />
            <Footer />
          </Route>

          <Route path="/cart">
            <CartDisplay />
            <Footer />
          </Route>

          <Route>
            <h1>Page Not Found</h1>
            <Footer />
          </Route>
        </Switch>
      )}



    </>
  );
}


export default App;