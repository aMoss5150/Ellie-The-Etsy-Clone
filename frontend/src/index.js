import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider, connect } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import { getProducts } from './store/products'
import { getCartLS, addItemLS, removeItemLS } from './store/cart'
import { getReviews, addReview } from './store/reviews'
import { CurrencyProvider } from './context/CurrencyContext'
import { ViewProvider } from './context/ViewCartContext'

// const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  //csrf
  window.csrfFetch = csrfFetch;
  window.restoreCSRF = restoreCSRF;

  //store
  window.store = store;


  //session
  window.sessionActions = sessionActions;

  //products
  window.getProducts = getProducts

  //cart
  window.getCartLS = getCartLS
  window.addItemLS = addItemLS
  window.removeItemLS = removeItemLS

  //reviews
  window.getReviews = getReviews
  window.addReview = addReview
}

function Root() {
  return (
    <ReduxProvider store={store}>
      <ViewProvider>
        <CurrencyProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CurrencyProvider>
      </ViewProvider>
    </ReduxProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
