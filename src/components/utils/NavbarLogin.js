import React, { useEffect, useState } from "react";
import { FormControl, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/logo.png";
import Login from "../../images/login.png";
import Cart from "../../images/cart.png";
import NavbarSearchHook from "../../hook/navbar/navbar-search-hook";
import ViewProductInCart from "../../hook/cart/view-product-in-cart";
import { Link } from "react-router-dom";

const NavbarLogin = () => {
  const [OnChangeSearch, searchWord] = NavbarSearchHook();
  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");

  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
    window.location.replace("/login");
  };

  // cart number
  const [cartNum, , , ,] = ViewProductInCart();

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            onChange={OnChangeSearch}
            value={word}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {user != "" ? (
              <NavDropdown
                title={user.name}
                id="basic-nav-dropdown"
                className="nav-text mt-1 d-flex gap-2 justify-content-center"
              >
                {user.role === "admin" ? (
                  <NavDropdown.Item as={Link} to="/admin/allproducts">
                    لوحة التحكم
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item as={Link} to="/user/profile">
                    الصفحة الشخصية
                  </NavDropdown.Item>
                )}

                <NavDropdown.Item onClick={logOut}>
                  تسجيل الخروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                className="nav-text d-flex mt-3 gap-2 justify-content-center"
              >
                <img src={Login} alt="login" className="login-img" />
                <p style={{ color: "white" }}>دخول</p>
              </Nav.Link>
            )}

            <Nav.Link
              as={Link}
              to="/cart"
              className="nav-text position-relative d-flex gap-2 mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={Cart} className="login-img" alt="cart" />
              <p style={{ color: "white" }}>العربه</p>
              <span className="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
                {cartNum || 0}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLogin;