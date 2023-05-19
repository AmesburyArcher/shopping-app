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
      <h2 className="cart__card__name">{item.name}</h2>
      <img src={item.img} className="cart__card__image" alt={item.name}></img>
      <div className="cart__card__price">{item.price}</div>
      <div className="cart__card__quantity">{quantity}</div>
      <button
        className="cart__card__add__button"
        onClick={function () {
          adjustQuantity("+");
        }}
        type="button"
      >
        Add
      </button>
      <button
        className="cart__card__remove__button"
        onClick={function () {
          adjustQuantity("-");
        }}
        type="button"
      >
        Remove
      </button>
      <button
        className="cart__card__trash__button"
        onClick={function () {
          deleteFromCart();
        }}
        type="button"
      >
        Trash
      </button>
    </li>
  ) : (
    ""
  );
};

export default CartCard;
