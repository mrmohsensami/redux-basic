import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductListWithThunk from "./components/ProductListWithThunk";

export const ThemeContext = React.createContext("red");

function App() {
  return (
    <ThemeContext.Provider value="orange">
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
          <div className="col">
            <ProductListWithThunk />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
