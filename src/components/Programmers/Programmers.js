import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Programmer from "../Programmer/Programmer";
import "./Programmers.css";

const Programmers = () => {
  const [programmers, setProgrammers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./programmers.JSON")
      .then((res) => res.json())
      .then((data) => setProgrammers(data));
  }, []);

  const handleAddToCart = (programmer) => {
    const newCart = [...cart, programmer];
    setCart(newCart);
  };

  return (
    <div className="row">
      <div className="col-md-8 programmer-container">
        <div className="row py-5">
          {programmers.map((programmer) => (
            <Programmer
              key={programmer.key}
              programmer={programmer}
              handleAddToCart={handleAddToCart}
            ></Programmer>
          ))}
        </div>
      </div>
      <div className="col-md-3 mt-5">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Programmers;
