import React, { useState } from "react";

const CartCard = function ({ item, editCart, cart, editTotal }) {
  const [quantity, editQuantity] = useState(+item.quantity);

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
          return {
            ...i,
            quantity: quantity,
          };
        } else {
          return i;
        }
      })
    );
  };

  return quantity > 0 ? (
    <li className="shopping__cart__card__container">
      <h2 className="cart__card__name">{item.name}</h2>
      <img src={item.img}></img>
      <div className="cart__card__price">{item.price}</div>
      <div className="cart__card__quantity">{quantity}</div>
      <button
        className="cart__card__add__button"
        onClick={function () {
          adjustQuantity("+");
        }}
      >
        Add
      </button>
      <button
        className="cart__card__remove__button"
        onClick={function () {
          adjustQuantity("-");
        }}
      >
        Remove
      </button>
      <button className="cart__card__trash__button" type="button">
        Trash
      </button>
    </li>
  ) : (
    ""
  );
};

export default CartCard;
