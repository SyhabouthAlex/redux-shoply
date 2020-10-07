import React from 'react';
import ItemsPage from "./ItemsPage";
import Cart from "./Cart";
import ItemDetails from "./ItemDetails";
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <ItemsPage />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/products/:id">
              <ItemDetails />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
    </div>
  );
}

export default App;
