import { useContext } from "react";
import { Link, BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faRegistered, faHome } from "@fortawesome/free-solid-svg-icons";
import Home from "./home";
import Cart from "./cart";
import Login from "./Login";
import { ProductData } from "./Products";
import { CartData } from "./CartProduct";
import { useState, useEffect } from "react";
import {HandleCartContext} from './Contexts/handleCartService';


function Nav(props) {
  const{ cartCount, setcartCount } = useContext(HandleCartContext)
  const [counter, setCounter] = useState(0);
  const getCartCount = () => {
    if (CartData.CartProducts.length > 0) {
      for (let i = 0; i < CartData.CartProducts.length; i++) {
        counter += CartData.CartProducts[i].value;
      }
      console.log(
        "CartTotal Before: ",
        ProductData.TotalCartItems[0].cartTotal
      );
      ProductData.TotalCartItems[0].cartTotal = counter;
      console.log("CartTotal After: ", ProductData);
      setCounter(counter);
    }
  };


  useEffect(() => {
    setCounter(cartCount)
  }, cartCount);
  return (
    <div>
      <BrowserRouter>
        {/* Navigation */}
        <h1 className="title">
          <Link to="/">
            Shop 2 <FontAwesomeIcon icon={faRegistered} />
            eact{" "}
          </Link>
          <span className="cart">
            <Link to="/allLists">
              <FontAwesomeIcon icon={faShoppingCart} /> {cartCount} items{" "}
            </Link>
          </span>
        </h1>
        {/* Routes */}
        <Routes>
          {/* <Route path="/" element={<displayProducts />} /> */}
          <Route path="/" element={<Home products={props} />} />

          <Route path="/allLists" element={<Cart cartItems={props} />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Nav;
