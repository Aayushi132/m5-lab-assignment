import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ContinueShop() {
  const navigate = useNavigate();
  return (
    <div className="cartPage">
      <h2>Your Cart Items</h2>
      <div>
        <p>There are 0 items in your cart.</p>
      </div>

      <React.Fragment>
        <Button variant="success mt-3" onClick={() => navigate("/")}>
          Continue Shop
        </Button>
      </React.Fragment>
    </div>
  );
}
