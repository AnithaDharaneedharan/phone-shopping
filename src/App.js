import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Default from "./components/Default";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
        
      </Switch>
    </React.Fragment>
  );
}

export default App;
