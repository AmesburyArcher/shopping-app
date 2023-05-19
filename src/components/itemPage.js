import React, { useRef, useState } from "react";
import ItemJSON from "../assets/catalogue.json";
import { useParams } from "react-router-dom";

const ItemPage = function ({ editTotal, editCart, cart }) {
  const [quantity, editQuantity] = useState(1);

  const { id } = useParams();
  const item = ItemJSON.find((i) => i.id == id);

  const changeQuantity = function (type) {
    if (type === "+") {
      editQuantity((q) => q + 1);
    } else {
      if (quantity <= 0) {
        editQuantity(0);
        return;
      }
      editQuantity((q) => q - 1);
    }
  };

  const addToCart = function () {
    if (!cart.some((target) => target.id == item.id)) createCartItem();
    else {
      editCart(
        cart.map((i) => {
          if (i.id == item.id) {
            return {
              ...i,
              quantity: i.quantity + quantity,
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
      name: item.make + " " + item.model,
      img: item.img,
      price: item.price,
      id: item.id,
      quantity: quantity,
    };

    editCart([...cart, cartItem]);
  };

  return (
    <div className="item__page__container">
      <img
        src={item.img}
        className="item__page__image"
        alt={item.make + " " + item.model}
      />
      <h1 className="item__page__make">
        {item.make} {item.model}
      </h1>

      <div className="item__page__price">{item.price}</div>
      <p className="item__page__info">{item.info}</p>
      <div className="item__quantity__container">
        <div className="item__increment__container">
          <button
            onClick={function () {
              changeQuantity("-");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-minus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l14 0"></path>
            </svg>
          </button>
          <input
            type="number"
            value={quantity}
            onChange={function (e) {
              let value = e.target.value;
              editQuantity(value >= 0 ? value : 0);
            }}
          ></input>
          <button
            onClick={function () {
              changeQuantity("+");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 5l0 14"></path>
              <path d="M5 12l14 0"></path>
            </svg>
          </button>
        </div>
        <button
          className="item__add__to__cart__button"
          disabled={quantity === 0}
          onClick={function () {
            editTotal(
              (total) =>
                total + Number(item.price.slice(1).replace(",", "") * quantity)
            );
            addToCart();
            editQuantity(0);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
