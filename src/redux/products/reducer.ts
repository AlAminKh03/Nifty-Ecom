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

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD:
      const { title, imgUrl, quantity, price } = action.payload;
      return [
        ...state,
        {
          id: nextId(state),
          title,
          imgUrl,
          quantity,
          price,
        },
      ];

    case ADDTOCART:
      return state.find((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return state;
      });
    default:
      return state;
  }
};

export default reducer;
