import { Middleware, legacy_createStore as createStore } from "redux";

import rootReducer from "./rootReducer";
import {
  addManyQuantity,
  addProductQuantity,
  removeProductQuantity,
} from "./products/actions";
import { ADD_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from "./cart/actionTypes";

const productManagementMiddleware: Middleware =
  (store) => (next) => (action) => {
    switch (action.type) {
      case ADD_TO_CART:
        store.dispatch(removeProductQuantity(action.payload));
        return next(action);

      case REMOVE_FROM_CART:
        store.dispatch(addProductQuantity(action.payload));
        return next(action);

      case DELETE_ITEM:
        store.dispatch(addManyQuantity(action.payload));
        return next(action);
      default:
        return next(action);
    }
  };

const store = createStore(rootReducer);

export default store;
