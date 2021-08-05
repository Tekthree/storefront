import { createSourceMapStore, combineReducers, applyMiddleware, createStore } from "redux";
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import categoriesReducer from "./categories";
import productsReducer from "./products";
import cartReducer from "./cart";



let reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  categories: categoriesReducer

})

let middlewares = applyMiddleware(thunk);

export default createStore(re)