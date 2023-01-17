import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductData } from "./Products";
import { Display } from "./displayProducts";
import Nav from "./Nav";
import "./style.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: ProductData,
    };
  }

  render() {
    return (
      {},
      (
        <div className="App text-secondary">
          <Nav
            // lists1={this.state.Products.Products[0]}
            // lists2={this.state.Products.Products[1]}
          />
        </div>
      )
    );
  }
}

export default App;
