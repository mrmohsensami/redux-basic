import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <div className="container-fluid">
      <h1>First Redux Sample App</h1>
      <hr />
      <div className="row">
        <div className="col">
          <ProductList />
        </div>
        <div className="col">
          <ProductDetails />
        </div>
      </div>
      <div className="row">
        <div className="col mb-5">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}

export default App;
