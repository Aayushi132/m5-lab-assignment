import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons";
import Home from "./home";
import ShoppingCart from "./cart";
import { ProductData } from "./Products";

function Nav(props) {
  
  return (
    <div>
      <Router>
        {/* Navigation */}
        {/* <ul className="nav mx-2 mb-4 mr-2">
          <li>
            <Link to="/">
              <FontAwesomeIcon
                icon={faHome}
                className="fas fa-2x my-3 mr-2 text-white"
              />
            </Link>
          </li>
          <li>
            <Link to="/allLists">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="fas fa-2x my-3 text-white"
              />
            </Link>
          </li>
        </ul> */}
        <h1 className="title">
          Shop 2 React{" "}
          <span className="cart">
            <Link to="/allLists">
              <FontAwesomeIcon icon={faShoppingCart} /> {props.cartTotal.cartTotal} items{" "}
            </Link>
          </span>
        </h1>
        {/* Routes */}
        <Routes>
          {/* <Route path="/" element={<displayProducts />} /> */}
          <Route path="/" element={<Home />} />

          <Route
            path="/allLists"
            element={<ShoppingCart cartItems={props} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Nav;
