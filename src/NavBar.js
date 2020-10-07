import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Shoply
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="mx-1" to="/">Products</NavLink>
            <NavLink className="mx-1" to="/cart">Cart</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;