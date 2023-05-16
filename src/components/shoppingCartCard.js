import React, { useState } from "react";

const CartCard = function ({ item, editCart, cart, editTotal }) {
  const [quantity, editQuantity] = useState(Number(item.quantity));

  const adjustQuantity = function (type) {
    if (type === "-") {
      editQuantity(quantity - 1);
      editTotal(
        (total) => Number(total) - Number(item.price.slice(1).replace(",", ""))
      );
      if (quantity <= 0) {
        const newCart = cart.filter((i) => i.id != item.id);
        editCart(newCart);
        return;
      }
    } else {
      editQuantity(quantity + 1);
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
