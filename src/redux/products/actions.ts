import {
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY,
  ADD_MANY_QUANTITY,
} from "./actionTypes";

export interface ActionType {
  type: string;
  payload: payloadType;
}
export interface payloadType {
  id?: number;
  title: string;
  category: string;
  price: number;
  quantity: number;
  imgUrl: string;
  cartQuantity: number;
}
export const addProduct = (product: payloadType) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const addProductQuantity = (id: number) => {
  return {
    type: ADD_PRODUCT_QUANTITY,
    payload: { id },
  };
};

export const removeProductQuantity = (id: number) => {
  return {
    type: REMOVE_PRODUCT_QUANTITY,
    payload: { id },
  };
};
export const addManyQuantity = (id: number) => {
  return {
    type: ADD_MANY_QUANTITY,
    payload: { id },
  };
};
