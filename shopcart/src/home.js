import React, { Component } from "react";
import { ProductData } from "./Products";
import handleShow from "./displayProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons";
import Display from "./displayProducts";
import CartItems from "./CartItems";

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
      <div className="alignmentLeft">
        {products.map((product) => (
            <Display>products = {product}</Display>
        ))}
      </div>
    );
  }

  renderCartItems(products) {
      return (
        <div>
          {products.map((product) => (
            <CartItems>cartItem = {product}</CartItems>
          ))}
        </div>
      );
  }

  render() {
    return (
      <div className="header"> 
        {/* <h1 className="title">
          Shop 2 React{" "}
          <span className="cart">
            <FontAwesomeIcon icon={faShoppingCart} /> 0 items{" "}
          </span>
        </h1> */}

        {this.renderProducts(this.state.Products.Products)}
      </div>
    );
  }
}

export default Home;
