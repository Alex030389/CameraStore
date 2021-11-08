import {combineReducers, createStore} from "redux";
import productsReducer from "./productsReducer";
import filterPriceReducer from "./filterPriceReducer";

let reducers = combineReducers({
  products: productsReducer,
  filterPrice: filterPriceReducer,
});

let store = createStore(reducers);

export default store;