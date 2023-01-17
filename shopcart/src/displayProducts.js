import React, { Component } from "react";
import { ProductData } from "./Products";
import { useState } from "react";
import { Modal } from 'react-bootstrap';

function Display(products) {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (product) => {setShow(true);
    setShowImge(product);}
    return (
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
                <p><span className="text-dark">Ratings:</span>{showImge.ratings}</p>
            </Modal.Body>
        </Modal>
      </div>
    );
}

export default Display;