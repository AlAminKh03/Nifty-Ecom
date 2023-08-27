import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";

import Homepage from "./Components/Homepage";
import CartPage from "./Components/CartPage";

function App() {
  const [isCartPage, setIsCartPage] = useState<boolean>(false);

  return (
    <>
      <Navbar setIsCartPage={setIsCartPage} />
      <main className="py-16">{!isCartPage ? <Homepage /> : <CartPage />}</main>
    </>
  );
}

export default App;
