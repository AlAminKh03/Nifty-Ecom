import { useDispatch } from "react-redux";

import { FormEvent, useState } from "react";
import { addProduct } from "../../redux/products/actions";

const ProductInput = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    title: " ",
    category: " ",
    imgUrl: " ",
    price: 0,
    quantity: 0,
    cartQuantity: 0,
  });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct({
      title: " ",
      category: " ",
      imgUrl: " ",
      price: 0,
      quantity: 0,
      cartQuantity: 0,
    });
  };

  const inputHandler = (
    productType: string,
    e: FormEvent<HTMLInputElement>
  ) => {
    if (productType === "price" || productType === "quantity") {
      console.log("mello");
      setProduct({
        ...product,
        [productType]: Number((e.target as HTMLInputElement).value),
      });
    } else if (
      productType === "title" ||
      productType === "category" ||
      productType === "imgUrl"
    ) {
      console.log("hello");
      setProduct({
        ...product,
        [productType]: (e.target as HTMLInputElement).value,
      });
    }
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={handleFormSubmit}
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            value={product?.title}
            required
            onChange={(e) => inputHandler("title", e)}
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            value={product?.category}
            required
            onChange={(e) => inputHandler("category", e)}
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            value={product?.imgUrl}
            required
            onChange={(e) => inputHandler("imgUrl", e)}
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              value={product?.price}
              onChange={(e) => inputHandler("price", e)}
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
              value={product?.quantity}
              onChange={(e) => inputHandler("quantity", e)}
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductInput;
