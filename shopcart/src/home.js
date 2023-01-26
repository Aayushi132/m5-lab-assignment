import React, { Component, useState, useContext} from "react";
import { ProductData } from "./Products";
import { CartData } from "./CartProduct";
import Display from "./displayProducts";
import CartItems from "./CartItems";


const Home = (products) =>{

  return(
    <div className="header">
      <div className="alignmentLeft">
      {
        products.products.products.map((product) => {
          return (<Display>cartItem = {product}</Display>)
        })
      }
      </div>

    </div>
  )
}
export default Home;


// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Products: ProductData,
//       CartProducts: CartData,
//     };
//   }

//   handleAddCartItems = (getItem, currentList) => {
//     currentList.push(getItem);
//     this.setState({ newlist: currentList });
//   };

//   renderProducts(products, totalCartItems) {
//     console.log("in render products", products)
//     return (
//       <div className="alignmentLeft">
//         {products.map((product) => {
//           return(
//             <Display>products = {product}</Display>
//           )
//           })}
//       </div>
//     );
//   }

//   renderCartItems(products) {

//     return (
//       <div>
//         {products.map((product) => (
//           <CartItems>cartItem = {product}</CartItems>
//         ))}
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div className="header">
//         {/* <h1 className="title">
//           Shop 2 React{" "}
//           <span className="cart">
//             <FontAwesomeIcon icon={faShoppingCart} /> 0 items{" "}
//           </span>
//         </h1> */}

//         {this.renderProducts(
//           this.state.Products.Products,
//           this.state.Products.TotalCartItems
//         )}
//         {/* <CartItems addItem={this.handleAddCartItems} ></CartItems> */}
//       </div>
//     );
//   }
// }

// export default Home;
