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

    case REMOVE_PRODUCT_QUANTITY:
      return copiedState.map((product) => {
        console.log(action.payload);
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          return product;
        }
      });
    case ADD_PRODUCT_QUANTITY:
      return copiedState.map((product) => {
        console.log(product);
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      });

    case ADD_MANY_QUANTITY:

    default:
      return state;
  }
};

export default productReducer;
