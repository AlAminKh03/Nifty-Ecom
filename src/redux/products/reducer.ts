import {
  ADD_MANY_QUANTITY,
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY,
} from "./actionTypes";
import { ActionType } from "./actions";
import initialState, { InitialStateType } from "./initialState";

const nextId = (products: InitialStateType[]) => {
  const maxNumber = products.reduce(
    (max, product) => Math.max(max, product.id),
    -1
  );
  return maxNumber + 1;
};

const productReducer = (state = initialState, action: ActionType) => {
  const copiedState = [...state];

  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = { ...action.payload, id: nextId(state) };
      copiedState.push(newProduct);
      return copiedState;

    case ADD_PRODUCT_QUANTITY:
      return copiedState.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case REMOVE_PRODUCT_QUANTITY:
      if (action.payload.quantity <= 0) {
        return state;
      } else {
        return copiedState.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    case ADD_MANY_QUANTITY:
      return copiedState.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.cartQuantity }
          : item
      );
    default:
      return state;
  }
};

export default productReducer;
