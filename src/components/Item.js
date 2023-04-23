import React from "react";
import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false);

  const addItemToCart = () => {
    setCart(true);
  };

  return (
    <li className="">
       <li className={inCart ? "in-cart" : ""}></li>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button onClick={addItemToCart} className="add">
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
