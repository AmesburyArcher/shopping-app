import React from "react";
import { Link } from "react-router-dom";

const Item = function ({
  id,
  make,
  model,
  product_type,
  price,
  img,
  cart,
  editCart,
  editTotal,
  total,
}) {
  const quickAddToCart = function () {
    editTotal((t) => t + Number(price.slice(1).replace(",", "")));

    if (!cart.some((target) => target.id == id)) createCartItem();
    else {
      editCart(
        cart.map((i) => {
          if (i.id == id) {
            return {
              ...i,
              quantity: i.quantity + 1,
            };
          } else {
            return i;
          }
        })
      );
    }
  };

  const createCartItem = function () {
    const cartItem = {
      name: make + " " + model,
      img: img,
      price: price,
      id: id,
      quantity: 1,
    };

    editCart([...cart, cartItem]);
  };
  return (
    <Link to={`item/${id}`}>
      <li id={id} className="item__card">
        <img src={img} className="item__image" alt={make + " " + model} />
        <h2 className="item__make">{make}</h2>
        <h2 className="item__model">{model}</h2>
        <div className="item__type">{product_type}</div>
        <div className="price">{price}</div>
        <button
          className="item__quick__add__button"
          type="button"
          onClick={function (e) {
            e.preventDefault();
            quickAddToCart();
          }}
        >
          Quick Add
        </button>
      </li>
    </Link>
  );
};

export default Item;
