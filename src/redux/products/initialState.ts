export interface InitialStateType {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
  quantity: number;
  price: number;
  cartQuantity: number;
}

const initialState: InitialStateType[] = [
  {
    id: 1,
    title: " T-Shirt",
    category: "Clothes",
    imgUrl:
      "https://shop.jbsgroup.ie/2054-large_default/fruit-of-the-loom-value-t-shirt-ss6-navy.jpg",
    quantity: 10,
    price: 200,
    cartQuantity: 0,
  },
  {
    id: 2,
    title: " Shirt",
    category: "Clothes",
    imgUrl:
      "https://poshgarments.com/wp-content/uploads/2021/09/Mens-Shirt-MWS0001.jpg",
    quantity: 20,
    price: 150,
    cartQuantity: 0,
  },
  {
    id: 3,
    title: " Seawt Shirt ",
    category: "Clothes",
    imgUrl:
      "https://lacoste.com.ph/media/catalog/product/cache/26fe6a6398e2195b866f326b17d6b664/s/h/sh9689_4xa_01.jpg",
    quantity: 25,
    price: 300,
    cartQuantity: 0,
  },
  {
    id: 4,
    title: " Sweat Pant",
    category: "Clothes",
    imgUrl:
      "https://wordans-a1a5.kxcdn.com/files/models/2010/12/1/410/410_big.jpg?1444306364",
    quantity: 20,
    price: 150,
    cartQuantity: 0,
  },
];

export default initialState;
