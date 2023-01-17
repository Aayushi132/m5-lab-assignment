import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons";
import Home from "./home";
import ShoppingCart from "./cart";


function Nav(props) {
    return (
      <div className="header bg-dark">
        <Router>
          {/* Navigation */}
          <ul className="nav mx-2 mb-4 mr-2">
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
          </ul>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/allLists"
              element={<ShoppingCart lists1={props.lists1} lists2={props.lists2} />}
            />
          </Routes>
        </Router>
      </div>
    );
}

export default Nav;