import { useDispatch } from "react-redux";
import {
  PayloadType,
  addCart,
  deleteCart,
  removeCart,
} from "../../redux/cart/action";

interface CartType {
  cart: PayloadType;
}

const Cart = ({ cart }: CartType) => {
  const { cartQuantity, price, title, category, imgUrl } = cart;
  const dispatch = useDispatch();
  console.log(cart);
  const total = price * cartQuantity;

  const addToCartHandler = () => {
    dispatch(addCart(cart));
  };

  const removeCartHandler = () => {
    dispatch(removeCart(cart));
  };

  const deleteHandler = () => {
    dispatch(deleteCart(cart));
  };
  return (
    <div>
      {/* <!-- Navbar ends --> */}
      <main className="py-6">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <div className="  w-[800px]">
            <div className="space-y-6">
              {/* <!-- Cart Item --> */}
              <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                  {/* <!-- cart image --> */}
                  <img className="lws-cartImage" src={imgUrl} alt="product" />
                  {/* <!-- cart item info --> */}
                  <div className="space-y-2">
                    <h4 className="lws-cartName">{title}</h4>
                    <p className="lws-cartCategory">{category}</p>
                    <p>
                      BDT <span className="lws-cartPrice">{price}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                  {/* <!-- amount buttons --> */}
                  <div className="flex items-center space-x-4">
                    <button
                      className="lws-incrementQuantity text-2xl font-bold"
                      onClick={addToCartHandler}
                    >
                      +
                    </button>
                    <span className="lws-cartQuantity">{cartQuantity}</span>
                    <button
                      className="lws-decrementQuantity text-2xl font-bold"
                      onClick={removeCartHandler}
                    >
                      -
                    </button>
                  </div>
                  {/* <!-- price --> */}
                  <p className="text-lg font-bold pr-32">
                    BDT <span className="lws-calculatedPrice">{total}</span>
                  </p>
                </div>
                {/* <!-- delete button --> */}
                <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                  <button
                    className="lws-removeFromCart font-bold"
                    onClick={deleteHandler}
                  >
                    X
                  </button>
                </div>
              </div>
              {/* <!-- Cart Items Ends --> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
