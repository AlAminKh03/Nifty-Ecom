import { useDispatch } from "react-redux";
import { InitialStateType } from "../../redux/products/initialState";
import { addCart } from "../../redux/cart/action";

interface ProductProps {
  product: InitialStateType;
}

const Product = ({ product }: ProductProps) => {
  const { id, title, category, imgUrl, price, quantity } = product;
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addCart(product));
  };
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
        <button
          disabled={quantity <= 0}
          className="lws-btnAddToCart"
          onClick={handleCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
