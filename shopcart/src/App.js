import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Component, useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductData } from "./Products";
import { CartData } from "./CartProduct";

import Nav from "./Nav";
import "./style.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Products: ProductData,
//       CartProducts: CartData,
//     };
//   }

//   render() {
//     return (
//       {},
//       (
//         <div className="App text-secondary">
//           <Nav
//             products={this.state.Products.Products}
//             cartTotalProduct={this.state.Products.TotalCartItems}
//             cartItems={this.state.CartProducts.CartProducts}
//           />
          
//           {/* pass data as attributes */}
//         </div>
//       )
//     );
//   }
// }

// export default App;

const App  = () =>{
  const [Products, setProducts] = useState(ProductData)
  const [CartProducts, setCartProducts] = useState(CartData)
  return(
    <div className="App text-secondary">
      <Nav
              products={Products.Products}
              cartTotalProduct={CartProducts.TotalCartItems}
              cartItems={CartProducts.CartProducts}
            />
    </div>
  )

}
export default App;
