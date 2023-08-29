import { ActionType, payloadType } from "../products/actions";
import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_ITEM } from "./actionTypes";

export interface ActionTypes extends ActionType {
  payload: PayloadType;
}

export interface PayloadType extends payloadType {
  cartQuantity: number;
  total: number;
}

export const addCart = (product: PayloadType) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeCart = (product: PayloadType) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const deleteCart = (product: PayloadType) => {
  return {
    type: DELETE_ITEM,
    payload: product,
  };
};
