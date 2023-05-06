import React from "react";
import ItemJSON from "../assets/catalogue.json";
import { useParams } from "react-router-dom";

const ItemPage = function () {
  const { id } = useParams();
  const item = ItemJSON.find((i) => i.id == id);

  return (
    <div>
      <img src={item.img} />
      <h1 className="item__page__make">{item.make}</h1>
      <h2 className="item__page__model">{item.model}</h2>

      <div className="item__page__price">{item.price}</div>
      <p className="item__page__info">{item.info}</p>
    </div>
  );
};

export default ItemPage;
