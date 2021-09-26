import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  let total = 0;
  for (const programmer of cart) {
    if (!programmer.quantity) {
      programmer.quantity = 1;
    }
    total = total + programmer.salary * programmer.quantity;
    totalQuantity = totalQuantity + programmer.quantity;
  }
  return (
    <div>
      <h3>List Summary</h3>
      <h5>Added Programmers: {totalQuantity}</h5>
      <br />
      <ul>
        {cart.map((programmer) => (
          <li>
            <h6>{programmer.name}</h6>
          </li>
        ))}
      </ul>
      <h4>Total Cost: {total.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
