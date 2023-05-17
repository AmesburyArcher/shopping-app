import React from "react";
import { Link } from "react-router-dom";

const Item = function ({ id, make, model, product_type, price, img }) {
  console.log(img);
  return (
    <Link to={`item/${id}`}>
      <li id={id} className="item__card">
        <img src={img} className="item__image" alt={make + " " + model} />
        <h2 className="item__make">{make}</h2>
        <h2 className="item__model">{model}</h2>
        <div className="item__type">{product_type}</div>
        <div className="price">{price}</div>
      </li>
    </Link>
  );
};

export default Item;
