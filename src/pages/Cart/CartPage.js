import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
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

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className="cart-title mt-4">عربة التسوق</div>
      </Row>
      <Row>
        <Col md="9">
          {!cartItems ? (
            <div className="d-flex justify-content-center align-items-center gap-3 my-5">
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="primary" />
            </div>
          ) : cartItems.length === 0 ? (
            <h2 className="text-center text-dark my-5">لا يوجد منتجات في العربة 🛒</h2>
          ) : (
            cartItems.map((product, index) => (
              <CartItem key={index} product={product} />
            ))
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
