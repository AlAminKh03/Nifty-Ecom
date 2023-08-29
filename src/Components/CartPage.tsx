import React from "react";
import Cart from "./Cart/Cart";
import BillDetails from "./Cart/BillDetails";
import { useSelector } from "react-redux";
import { PayloadType } from "../redux/cart/action";
import { RootState } from "./Homepage";

type Props = {};

const CartPage = (props: Props) => {
  const carts: PayloadType[] = useSelector((state: RootState) => state.carts);

  return (
    <>
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            {carts.length >= 1
              ? carts.map((cart) => <Cart cart={cart} key={cart.id} />)
              : "No products in here"}
            {/* <!-- Cart Items Ends --> */}
          </div>

          {/* <!-- Bill Details --> */}
          <div>
            <BillDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
