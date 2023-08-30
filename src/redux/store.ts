import {
  Middleware,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import rootReducer from "./rootReducer";
import {
  addManyQuantity,
  addProductQuantity,
  removeProductQuantity,
} from "./products/actions";
import { ADD_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from "./cart/actionTypes";
import { composeWithDevTools } from "redux-devtools-extension";

const productManagementMiddleware: Middleware =
  (store) => (next) => (action) => {
    switch (action.type) {
      case ADD_TO_CART:
        console.log(action.payload);
        store.dispatch(removeProductQuantity(action.payload.id));
        return next(action);

      case REMOVE_FROM_CART:
        console.log(action.payload);
        store.dispatch(addProductQuantity(action.payload.id));
        return next(action);

      case DELETE_ITEM:
        store.dispatch(addManyQuantity(action.payload));
        return next(action);
      default:
        return next(action);
    }
  };

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(productManagementMiddleware))
);

export default store;
