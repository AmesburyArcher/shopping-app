import React, { useState } from "react";

const ShoppingCart = function ({ total }) {
  let CADDollar = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  return (
    <>
      <div className="shopping__total">{CADDollar.format(total)}</div>
    </>
  );
};

export default ShoppingCart;
