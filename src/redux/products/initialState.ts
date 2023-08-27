export interface InitialStateType {
  id: number;
  title: string;
  imgUrl: string;
  quantity: number;
  price: number;
}

const initialState: InitialStateType[] = [
  {
    id: 1,
    title: " Mango",
    imgUrl: "https://unsplash.com/photos/Dyc95dKuGp4",
    quantity: 10,
    price: 200,
  },
];

export default initialState;
