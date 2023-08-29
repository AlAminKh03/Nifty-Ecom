import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import cartReducer from "./cart/CartReducer";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});

export default rootReducer;
