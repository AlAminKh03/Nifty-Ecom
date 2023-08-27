import React from "react";
import Product from "./ProductPage/Product";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <main className="py-16">
      <div className="productWrapper">
        {/* <!-- products container --> */}
        <div id="lws-productContainer">
          <Product />
        </div>
      </div>
    </main>
  );
};

export default ProductList;
