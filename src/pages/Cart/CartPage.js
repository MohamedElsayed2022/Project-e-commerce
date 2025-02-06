import React, { useState } from "react";
import { Button, Col, Container, Modal, Row, Spinner } from "react-bootstrap";
import CartItem from "../../components/Cart/CardItem";
import CartCheckout from "../../components/Cart/CartCheckout";
import ViewProductInCart from "../../hook/cart/view-product-in-cart";
import { ToastContainer } from "react-toastify";

const CartPage = () => {
  const [
    ,
    cartItems,
    couponNameRes,
    totalCartPrice,
    totalCartPriceAfterDiscount,
  ] = ViewProductInCart();

  // console.log("Discount :- " , to)

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className="cart-title mt-4">عربة التسوق</div>
      </Row>
      <Row>
        <Col md="9">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((product, index) => (
              <CartItem key={index} product={product} />
            ))
          ) : (
            <h2 className="text-dark  mt-2">
              <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
          </div>
            </h2>
          )}
        </Col>
        <Col md="3">
          <CartCheckout
          cartItems={cartItems}
            couponNameRes={couponNameRes}
            totalCartPrice={totalCartPrice}
            totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
          />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default CartPage;
