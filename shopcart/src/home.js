import React, { Component } from "react";
import { ProductData } from "./Products";
import handleShow from "./displayProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons";

import Display from "./displayProducts";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: ProductData,
    };
  }
  renderProducts(products) {
    console.log("Test: ", products);
    return (
      <div>
        {products.map((product) => (
          <div>
            <Display>products = {product}</Display>
          </div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1 className="title">
          Shop to React{" "}
          <span className="cart">
            <FontAwesomeIcon icon={faShoppingCart} /> 0 items{" "}
          </span>
        </h1>

        {this.renderProducts(this.state.Products.Products)}
      </div>
    );
  }
}

export default Home;
