import { ADD, ADDTOCART } from "./actionTypes";
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
  switch (action.type) {
    case ADD:
      const { title, imgUrl, quantity, price, category } = action.payload;
      return [
        ...state,
        {
          id: nextId(state),
          title,
          category,
          imgUrl,
          quantity,
          price,
        },
      ];

    case ADDTOCART:
      return state.find((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: Number(product.quantity) - 1,
          };
        }
        return state;
      });
    default:
      return state;
  }
};

export default productReducer;
