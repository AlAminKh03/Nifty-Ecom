import { useSelector } from "react-redux";

import { RootState } from "./Homepage";

type Props = {
  setIsCartPage: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar = ({ setIsCartPage }: Props) => {
  const carts = useSelector((state: RootState) => state.carts);
  console.log(carts);
  const cartItem = carts.reduce(
    (totalItem, item) => item.cartQuantity + totalItem,
    0
  );
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a onClick={() => setIsCartPage(false)} href="#">
          <h1 className="font-5xl font-bold">Nifty E-com</h1>
        </a>

        <div className="flex gap-4">
          <a
            onClick={() => setIsCartPage(false)}
            href="#"
            className="navHome"
            id="lws-home"
          >
            {" "}
            Home{" "}
          </a>
          <a
            onClick={() => setIsCartPage(true)}
            href="#"
            className="navCart"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{cartItem}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
