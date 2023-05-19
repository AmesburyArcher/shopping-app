import "./App.css";
import { useState } from "react";

import Item from "./components/item";
import Catalogue from "./components/catalogue";

import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/shoppingCart";
import Nav from "./components/navBar";
import ItemPage from "./components/itemPage";

function App() {
  const [total, editTotal] = useState(0);
  const [cart, editCart] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              total={total}
              cart={cart}
              editCart={editCart}
              editTotal={editTotal}
            />
          }
        />
        <Route path="/catalogue">
          <Route
            index
            element={
              <Catalogue
                cart={cart}
                editCart={editCart}
                total={total}
                editTotal={editTotal}
              />
            }
          />
          <Route
            path="item/:id"
            element={
              <ItemPage editTotal={editTotal} editCart={editCart} cart={cart} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
