import React, { useEffect, useState, useContext } from "react";
import { ProductData } from "./Products";
import { CartData } from "./CartProduct";
import Display from "./displayProducts";
import CartItems from "./CartItems";

const Home = (products) => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("normal");
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        highest: "price",
        lowest: "price",
        normal: "price",
      };
      const sortProperty = types[type];

      console.log("type: " + type);
      let sorted = [...products.products.products];
      switch (type) {
        case "highest":
          return ascOrder(sorted, sortProperty);
        case "lowest":
          return descOrder(sorted, sortProperty);
        case "normal":
         return normalOrder(sorted);
      }
    };

    sortArray(sortType);
  }, [sortType]);

  const ascOrder = (sorted, sortProperty) => {
    console.log("in highest");
    sorted = [...products.products.products].sort(
      (a, b) => b[sortProperty] - a[sortProperty]
    );
    console.log(sorted);
    setData(sorted);
  };

  const descOrder = (sorted, sortProperty) => {
    console.log("in lowest");
    sorted = [...products.products.products].sort(
      (a, b) => a[sortProperty] - b[sortProperty]
    );
    console.log(sorted);
    setData(sorted);
  };

  const normalOrder = (sorted) => {
     console.log("in normal");
     sorted = [...products.products.products];
     console.log(sorted);
     setData(sorted);
  }

  return (
    <div className="header">
      <label>Sort Price By: </label>nbsp;
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="highest">Highest</option>
        <option value="lowest">Lowest</option>
      </select>
      <div className="alignmentLeft">
        {data.map((product) => {
          return <Display>cartItem = {product}</Display>;
        })}
      </div>
    </div>
  );
};
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
