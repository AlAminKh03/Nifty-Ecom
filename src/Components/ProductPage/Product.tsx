import { InitialStateType } from "../../redux/products/initialState";

interface ProductProps {
  product: InitialStateType;
}

const Product = ({ product }: ProductProps) => {
  const { title, category, imgUrl, price, quantity } = product;
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imgUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{title}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button className="lws-btnAddToCart">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
