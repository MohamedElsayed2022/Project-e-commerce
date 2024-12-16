import React, { useEffect, useState } from "react";
import { Form, FormControl, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from '../../images/logo.png'
import Login from '../../images/login.png'
import Cart from '../../images/cart.png'
import { Link, useNavigate } from "react-router-dom";
import NavbarSearchHook from "../../hook/navbar/navbar-search-hook";
import ViewProductInCart from "../../hook/cart/view-product-in-cart";
const NavbarLogin = () => {
  const [ OnChangeSearch , searchWord] = NavbarSearchHook()
  const navigate = useNavigate()
  let word = ""
  if(localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord")

  const [user, setUser] = useState('');
  useEffect(() => {
      if (localStorage.getItem("user") != null)
          setUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  const logOut = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setUser('')
    navigate("/login")
    window.location.reload(false)
    
}

// cart number

const [cartNum , cartItems , couponName , totalCartPrice , totalCartPriceAfterDiscount]= ViewProductInCart()
if(cartNum)
  console.log(cartNum)
    return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
    <Container>
        <Navbar.Brand href="#home">
          <a href="/">
            <img src={Logo} alt="logo" className="logo"/>
          </a>
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
            {
                  user !="" ? (
                    <NavDropdown title={user.name} id="basic-nav-dropdown" className="nav-text mt-1 d-flex gap-2 justify-content-center">
                  
                    {user.role === "admin" ? (
                         <NavDropdown.Item href="/admin/allproducts"> لوحة التحكم</NavDropdown.Item>
                    ) : (
                    <NavDropdown.Item href="/user/profile">الصفحة الشخصية</NavDropdown.Item>
                    )}
                  
                    <NavDropdown.Item onClick={logOut}>
                      تسجيل الخروج
                    </NavDropdown.Item>
                  </NavDropdown>
                  ) :
                   <Nav.Link href="/login" className="nav-text d-flex mt-3  gap-2 justify-content-center  ">
                  <img src={Login} alt="sfvs" className="login-img"/>
                  <p style={{color:"white"}}>دخول</p>
                </Nav.Link>
            }
         
            
            <Nav.Link
              href="/cart"
              className="nav-text position-relative d-flex gap-2 mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={Cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
              <span class="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
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
