import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { applyCoupon } from "../../Redux/Actions/couponAction";
import notify from "../../hook/useNotification";
import ViewProductInCart from "../../hook/cart/view-product-in-cart";
import ClearItemsCart from "../../hook/cart/clear-items-cart";
import ApplyCouponHook from "../../hook/cart/apply-coupon-hook";

const CartCheckout = ({cartItems , couponNameRes,totalCartPrice,totalCartPriceAfterDiscount}) => {
    const [onChangeCoupon , couponName , handleSubmitCoupon ,handleCheckout] = ApplyCouponHook(cartItems)
  const [handleSubmit , handelDeleteItem] = ClearItemsCart()
  useEffect(()=>{
    if(couponNameRes){
      onChangeCoupon(couponNameRes)
    }
  },[couponNameRes])
  
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            value={couponName}
            onChange={(e)=>onChangeCoupon(e.target.value)}
            className="copon-input  d-inline text-center "
            placeholder="كود الخصم"
          />
          <button className="copon-btn d-inline" onClick={handleSubmitCoupon}>
            تطبيق
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {totalCartPriceAfterDiscount >= 1
            ? `${totalCartPrice} جنيه ... بعد الخصم ${totalCartPriceAfterDiscount} جنيه`
            : `${totalCartPrice} جنيه`}{" "}
        </div>
        {/* <Link
          to="/order/paymethoud"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline "
        > */}
          <button className="product-cart-add w-100 px-2" onClick={handleCheckout}> اتمام الشراء</button>
        {/* </Link> */}
        
          <button className="product-cart-add w-100 px-2 mt-1" onClick={handleSubmit}> مسح العربة</button>
      </Col>
    </Row>
  );
};

export default CartCheckout;
