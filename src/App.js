import "./App.css";
import { useState } from "react";

import Item from "./components/item";
import Catalogue from "./components/catalogue";

import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/shoppingCart";
import Nav from "./components/navBar";
import ItemPage from "./components/itemPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </div>
  );
}

export default App;
