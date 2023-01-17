import React, { Component } from "react";
import { ProductData } from "./Products";
import handleShow from "./displayProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: ProductData,
    };
  }
  renderProducts(products) {
    return (
      {},
      (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <p className="desc">
                <span>{product.desc}</span>
              </p>
              <img
                src={product.image}
                className="productImage"
                onClick={() => handleShow(product)}
              />{" "}
              <span className="value"> {product.value} </span>{" "}
              <span className="text"> quantity </span>
              <div style={{ border: "1.5px solid rgba(0, 0, 0, 0.05)" }}></div>
            </div>
          ))}
        </div>
      )
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

        {this.renderProducts(this.state.Products)}
      </div>
    );
  }
}

export default Home;