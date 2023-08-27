import React from "react";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div>
      {/* <!-- Navbar ends --> */}
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="  w-[800px]">
            <div className="space-y-6">
              {/* <!-- Cart Item --> */}
              <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                  {/* <!-- cart image --> */}
                  <img
                    className="lws-cartImage"
                    src="https://i.dummyjson.com/data/products/40/thumbnail.jpg"
                    alt="product"
                  />
                  {/* <!-- cart item info --> */}
                  <div className="space-y-2">
                    <h4 className="lws-cartName">
                      Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
                    </h4>
                    <p className="lws-cartCategory">Men's clothing</p>
                    <p>
                      BDT <span className="lws-cartPrice">1100</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                  {/* <!-- amount buttons --> */}
                  <div className="flex items-center space-x-4">
                    <button className="lws-incrementQuantity text-2xl font-bold">
                      +
                    </button>
                    <span className="lws-cartQuantity">2</span>
                    <button className="lws-decrementQuantity text-2xl font-bold">
                      -
                    </button>
                  </div>
                  {/* <!-- price --> */}
                  <p className="text-lg font-bold pr-32">
                    BDT <span className="lws-calculatedPrice">2200</span>
                  </p>
                </div>
                {/* <!-- delete button --> */}
                <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                  <button className="lws-removeFromCart font-bold">X</button>
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
