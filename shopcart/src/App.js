import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [
        {
          id: 1,
          image: "./products/cologne.jpg",
          desc: "Unisex Cologne",
          value: 0,
        },
        {
          id: 2,
          image: "./products/iwatch.jpg",
          desc: "Apple iWatch",
          value: 0,
        },
        {
          id: 3,
          image: "./products/mug.jpg",
          desc: "Unique Mug",
          value: 0,
        },
        {
          id: 4,
          image: "./products/wallet.jpg",
          desc: "Mens Wallet",
          value: 0,
        },
      ],
    };
  }
  renderProducts(products) {
    return (
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: "1.5px solid rgba(0, 0, 0, 0.05)" }}
          >
            <p>
              <span className="desc">{product.desc}</span>
            </p>
            <img src={product.image} className="productImage" />{" "}
            <span className="value"> {product.value} </span>{" "}
            <span className="text"> quantity </span>
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
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> 0 items{" "}
          </span>
        </h1>

        {this.renderProducts(this.state.Products)}
      </div>
    );
  }
}

export default App;
