import React from "react";
import ProductInput from "./ProductPage/ProductInput";
import Product from "./ProductPage/Product";
import { InitialStateType } from "../redux/products/initialState";
import { useSelector } from "react-redux";
import rootReducer from "../redux/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

const Homepage = () => {
  const products: InitialStateType[] = useSelector(
    (state: RootState) => state.products
  );
  return (
    <div className="productWrapper">
      <div className="productContainer" id="lws-productContainer">
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
      <ProductInput />
    </div>
  );
};

export default Homepage;
