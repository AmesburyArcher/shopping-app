import React from "react";
import { Link } from "react-router-dom";

const Item = function ({ id, make, model, product_type, price, img }) {
  return (
    <li id={id} className="item__card">
      <img src={img} />
      <Link to={`item/${id}`}>
        <h2 className="item__make">{make}</h2>
      </Link>
      <h2 className="item__model">{model}</h2>
      <div className="item__type">{product_type}</div>
      <div className="price">{price}</div>
    </li>
  );
};

export default Item;
