import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import { getProducts } from './store/products'
import { addItem, removeItem, emptyCart } from './store/cart'
import { getReviews, addReview } from './store/reviews'

const store = configureStore();

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
  window.addItem = addItem
  window.removeItem = removeItem
  window.emptyCart = emptyCart

  //reviews
  window.getReviews = getReviews
  window.addReview = addReview
}

function Root() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
