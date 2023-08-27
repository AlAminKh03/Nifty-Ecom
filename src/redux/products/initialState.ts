export interface InitialStateType {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
  quantity: number | string;
  price: number | string;
}

const initialState: InitialStateType[] = [
  {
    id: 1,
    title: " Mango",
    category: "food",
    imgUrl:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
    quantity: 10,
    price: 200,
  },
];

export default initialState;
