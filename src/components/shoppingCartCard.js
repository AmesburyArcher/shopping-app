import React, { useState } from "react";

const CartCard = function ({ item, editCart, cart, editTotal }) {
  const [quantity, editQuantity] = useState(Number(item.quantity));

  const adjustQuantity = function (type) {
    if (type === "-") {
      editQuantity((q) => q - 1);
      editTotal(
        (total) => Number(total) - Number(item.price.slice(1).replace(",", ""))
      );
      if (quantity <= 0) {
        const newCart = cart.filter((i) => i.id != item.id);
        editCart(newCart);
        return;
      }
    } else {
      editQuantity((q) => q + 1);
      editTotal(
        (total) => Number(total) + Number(item.price.slice(1).replace(",", ""))
      );
    }

    editCart(
      cart.map((i) => {
        if (i.id == item.id) {
          console.log(i);
          return {
            ...i,
            quantity: type === "-" ? quantity - 1 : quantity + 1,
          };
        } else {
          return i;
        }
      })
    );
  };

  const deleteFromCart = function () {
    // const quantity = item.quantity;
    editCart(cart.filter((i) => i.id != item.id));
    editTotal(
      (total) =>
        total -
        Number(item.quantity) * Number(item.price.slice(1).replace(",", ""))
    );
  };

  return quantity > 0 ? (
    <li className="shopping__cart__card__container">
      <div className="cart__card__divider">
        <h2 className="cart__card__name">{item.name}</h2>
        <img src={item.img} className="cart__card__image" alt={item.name}></img>
      </div>
      <div className="cart__card__divider">
        <div className="cart__card__divider">
          <div className="cart__card__price">{item.price}</div>
          <div className="cart__card__quantity">Quantity: {quantity}</div>
        </div>
        <div className="cart__card__divider__buttons">
          <button
            className="cart__card__add__button"
            onClick={function () {
              adjustQuantity("+");
            }}
            type="button"
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
          <button
            className="cart__card__remove__button"
            onClick={function () {
              adjustQuantity("-");
            }}
            type="button"
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
          <button
            className="cart__card__trash__button"
            onClick={function () {
              deleteFromCart();
            }}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-trash"
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
              <path d="M4 7l16 0"></path>
              <path d="M10 11l0 6"></path>
              <path d="M14 11l0 6"></path>
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
          </button>
        </div>
      </div>
    </li>
  ) : (
    ""
  );
};

export default CartCard;
