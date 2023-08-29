import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import { RootState } from "./Homepage";

type Props = {
  setIsCartPage: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar = ({ setIsCartPage }: Props) => {
  const carts = useSelector((state: RootState) => state.carts);
  const cartItem = carts.reduce(
    (totalItem, item) => item.cartQuantity + totalItem,
    0
  );
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a onClick={() => setIsCartPage(false)} href="#">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
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
