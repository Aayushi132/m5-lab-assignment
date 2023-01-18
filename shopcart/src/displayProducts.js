import React, { Component } from "react";
import { ProductData } from "./Products";
import { useState } from "react";
import { Modal } from "react-bootstrap";

// normal function receiving props
function Display(products) {
  console.log("products: ", products.children[1]);
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (products) => {
    console.log("product: ", products);
    setShow(true);
    setShowImge(products);
  };
  const prod = products.children[1];
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
      <span className="value"> {prod.value} </span>{" "}
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
