import React, { useState } from "react";
import CartCard from "./shoppingCartCard";

const ShoppingCart = function ({ total, cart, editCart, editTotal }) {
  let CADDollar = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  const items = cart.map((i) => (
    <CartCard
      item={i}
      key={i.id}
      cart={cart}
      editCart={editCart}
      editTotal={editTotal}
    />
  ));

  return (
    <div className="shopping__cart__container">
      <h1 className="shopping__cart__title">Shopping Cart</h1>
      <div className="shopping__total">Total: {CADDollar.format(total)}</div>
      <ul className="shopping__cart__list">{items}</ul>
    </div>
  );
};

export default ShoppingCart;
