import React, { Component } from "react";
import { ProductData } from "./Products";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";

// normal function receiving props
function Display(products) {
  console.log("products: ", products.children[1]);
  const totalItems = ProductData.TotalCartItems[0].cartTotal;

  const prod = products.children[1];

  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (products) => {
    console.log("product: ", products);
    setShow(true);
    setShowImge(products);
  };

  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(totalItems);
  const addCount = (countValue) => {
    setCount(countValue + 1);
    prod.value = count;
    setTotalCount(countValue + 1);
    ProductData.TotalCartItems[0].cartTotal = totalCount;
    console.log("totalItems: ", ProductData.TotalCartItems[0].cartTotal);
  };
  const removeCount = (countValue) => {
    if (countValue == 0) {
      return;
    }
    setCount(countValue - 1);
    prod.value = count;
    setTotalCount(countValue - 1);
    ProductData.TotalCartItems[0].cartTotal = totalCount;
    console.log("totalItems: ", ProductData.TotalCartItems[0].cartTotal);
  };

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
