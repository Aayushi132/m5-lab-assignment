import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductData } from "./Products";
import Nav from "./Nav";
import { Modal, Button } from "react-bootstrap";
import Login from "./Login";

export default function Cart(products) {
  const navigate = useNavigate();
  console.log("products from Cart: ", ProductData.Products);
  return (
    <div className="cartPage">
      <h2>Your Cart Items</h2>
      <div>
        {products.cartItems.cartItems.map((prod) => (
          <div key={prod.id}>
            <p className="desc">
              <span>{prod.desc}</span>
            </p>
            <img src={prod.image} className="productImage" />{" "}
            <span className="value"> {prod.value} </span>{" "}
            <span className="text"> quantity </span>
            <div style={{ border: "1.5px solid rgba(0, 0, 0, 0.05)" }}></div>
          </div>
        ))}
      </div>

      <React.Fragment>
        <Button variant="primary mt-3" onClick={() => navigate("/login")}>
          Check Out
        </Button>
      </React.Fragment>
    </div>
  );
}
