import logo from "../assets/images/logo.png";

type Props = {
  setIsCartPage: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar = ({ setIsCartPage }: Props) => {
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
            <span id="lws-totalCart">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
