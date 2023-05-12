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
    <>
      <div className="shopping__total">{CADDollar.format(total)}</div>
      <ul>{items}</ul>
    </>
  );
};

export default ShoppingCart;
