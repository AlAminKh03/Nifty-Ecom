import React from "react";
import ProductInput from "./ProductPage/ProductInput";
import Product from "./ProductPage/Product";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="productWrapper">
      <div className="productContainer" id="lws-productContainer">
        <Product />
      </div>
      <ProductInput />
    </div>
  );
};

export default Homepage;
