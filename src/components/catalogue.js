import React from "react";
import ItemsJSON from "../assets/catalogue.json";
import Item from "./item";

const Catalogue = function ({ total, editTotal, cart, editCart }) {
  const list = ItemsJSON.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      make={item.make}
      model={item.model}
      price={item.price}
      product_type={item.product_type}
      img={item.img}
      cart={cart}
      editCart={editCart}
      total={total}
      editTotal={editTotal}
    />
  ));

  return (
    <div className="catalogue__container">
      <h1>Collection</h1>
      <ul className="item__list">{list}</ul>
    </div>
  );
};

export default Catalogue;
