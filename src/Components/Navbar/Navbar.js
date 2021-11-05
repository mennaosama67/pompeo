import React, { useContext } from "react";
import { DataContext } from "../ProductData/DataProvider";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
function NavBar() {
  const value = useContext(DataContext);
  const [cart] = value.cart;

  return (
    <Navbar bg="light" fixed="top" expand="lg" collapseOnSelect className="ms-auto">
      <Container>
      <NavbarBrand>
        <Link to="/" className="nav-brand">
          Pompeo
        </Link>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <Nav className="nav-links ms-auto">
          <Nav.Link  eventKey={1}>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link  eventKey={2}>
            <Link to="/shop">Shop</Link>
          </Nav.Link>
          <Nav.Link  eventKey={3}>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link  eventKey={4}>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
          <Nav.Link  eventKey={5}>
            <Link to="/cart">
              <i className="fas fa-shopping-cart "> </i>
              <span className="counter">{cart.length}</span>
            </Link>
          </Nav.Link>
        </Nav>
      </NavbarCollapse>
      </Container>
    </Navbar>

    /*<nav className="navbar navbar-expand-lg fixed-top" collapseOnSelect>
      <div className="container-fluid ">
        <Link to="/">
          <a className="navbar-brand">Pompeo</a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon ">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse px-0" id="navbarNav">
          <ul className="navbar-nav ms-auto nav-flex-icons ">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link active" aria-current="page" eventKey="1">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link " eventKey="2">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop">
                {" "}
                <a className="nav-link" eventKey="3">Shop</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <a className="nav-link " eventKey="4">Contact</a>
              </Link>
            </li>
            <li className="nav-item my-auto">
              <Link to="/cart">
                <a
                  className=" btn-floating btn-light  "
                  type="button"
                  role="button"
                  eventKey="5">
                  <i className="fas fa-shopping-cart "> </i>
                  <span className="counter">
                  {cart.length}
                </span>
                
                </a>
              
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>*/
  );
}

export default NavBar;
