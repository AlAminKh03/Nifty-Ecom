import { ADD, ADDTOCART } from "./actionTypes";

export interface ActionType {
  type: string;
  payload: PayloadType;
}

export interface PayloadType {
  id?: number;
  title?: string;
  category?: string;
  imgUrl?: string;
  quantity?: number | string;
  price?: number | string;
}

export const add = (product: PayloadType) => {
  return {
    type: ADD,
    payload: product,
  };
};

export const addToCart = (id: number) => {
  return {
    type: ADDTOCART,
    payload: id,
  };
};
