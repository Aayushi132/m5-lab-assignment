import React, { Component, useContext } from "react";
import { ProductData } from "./Products";
import { CartData } from "./CartProduct";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import {HandleCartContext} from './Contexts/handleCartService';
import Home from "./home";

// normal function receiving props
function Display(products, cartTotal) {
  const{ cartCount, setcartCount } = useContext(HandleCartContext)

  
  // console.log("products: ", products.children[1]);
  // console.log("cartTotal: ", cartTotal);
  const totalItems = cartTotal;
  const prod = products.children[1];


  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (products) => {
    setShow(true);
    setShowImge(products);
  };

  const [count, setCount] = useState(prod.value);
  let initialCount = 0

  const calculateCartItems = (itemsInCart) => {
    itemsInCart.map((items) => {
      initialCount = initialCount + items.value
    })
    setcartCount(initialCount)
  }

  const addCount = (countValue) => {
    setCount(countValue + 1);

    if (CartData.CartProducts.indexOf(prod) > -1) {
      console.log("Index cartProduct: ", CartData.CartProducts.indexOf(prod));
      const cartIndex = CartData.CartProducts.indexOf(prod);
      const cartData = CartData.CartProducts[cartIndex];
      
      cartData.value += 1;
      CartData.CartProducts.pop(prod);
      CartData.CartProducts.push(cartData);
    } else {
      prod.value += 1;
      CartData.CartProducts.push(prod);
    }
    //getCartCount();
    console.log("Updated Cart: ", CartData.CartProducts);
    //console.log("Updated Cart Count: ", getCartCount());
    calculateCartItems(CartData.CartProducts)
  };

  const removeCount = (countValue) => {
    if (countValue == 0) {
      return;
    }
    setCount(countValue - 1);
    const found = CartData.CartProducts.find((obj) => {
      if (obj.id === prod.id) {
        if (obj.value > 1) {
          obj.value -= 1;
        } else {
          // obj.value = 0;
          // CartData.CartProducts.(obj);
        }
      }
    });

    // if (CartData.CartProducts.indexOf(prod) > -1) {
    //   const cartIndex = CartData.CartProducts.indexOf(prod);
    //   const cartData = CartData.CartProducts[cartIndex];

    //   if (cartData.value > 1) {
    //     cartData.value -= 1;
    //   } else {
    //     CartData.CartProducts.pop(cartData);
    //   }
    // } else {
    //   console.log("No items in cart.");
    // }
    //getCartCount();
    // prod.value = count;
    console.log("Updated Cart: ", CartData.CartProducts);
    //console.log("Updated Cart Count: ", getCartCount());
    calculateCartItems(CartData.CartProducts)
  };

  // const getCartCount = () => {
  //   let count = 0;
  //   for (let i = 0; i < CartData.CartProducts.length; i++) {
  //     count += CartData.CartProducts[i].value;
  //   }
  //   console.log("CartTotal Before: ", ProductData.TotalCartItems[0].cartTotal);
  //   ProductData.TotalCartItems[0].cartTotal = count;
  //   console.log("CartTotal After: ", ProductData);
  //   return count;
  // };

  return (
    <div key={prod.id}>
      <p className="desc">
        <span>{prod.desc}</span>
      </p>
      <img
        src={prod.image}
        className="productImage"
        onClick={() => handleShow(prod)}
      />{" "}
      <button onClick={() => addCount(count)}>
        <FontAwesomeIcon icon={faSquarePlus} />
      </button>
      <button className="mx-3" onClick={() => removeCount(count)}>
        <FontAwesomeIcon icon={faSquareMinus} />
      </button>
      <span className="value"> {count} </span>{" "}
      <span className="text"> quantity </span>
      <div style={{ border: "1.5px solid rgba(0, 0, 0, 0.05)" }}></div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImge.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImge.image}
            width="350"
            alt={showImge.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings:</span>
            {showImge.ratings}
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Display;
