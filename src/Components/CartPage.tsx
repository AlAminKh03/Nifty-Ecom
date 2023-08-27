import React from "react";
import Cart from "./Cart/Cart";
import BillDetails from "./Cart/BillDetails";

type Props = {};

const CartPage = (props: Props) => {
  return (
    <>
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            <Cart />
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
