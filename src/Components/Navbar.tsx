import { useSelector } from "react-redux";

import { RootState } from "./Homepage";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
        <a onClick={() => setIsCartPage(false)} href="#" className="">
          <h1
            style={{ color: "white", fontSize: "20px" }}
            className=" font-bold"
          >
            Nifty E-com
          </h1>
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
            <AiOutlineShoppingCart className=" w-10 h-10" />
            <span id="lws-totalCart">{cartItem}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
