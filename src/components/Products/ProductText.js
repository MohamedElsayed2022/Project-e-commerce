import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductsDetailsHook from "../../hook/product/view-products-details-hook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneCategory } from "../../Redux/Actions/categoryAction";
import AddToCartHook from "../../hook/cart/add-to-cart-hook";
import { ToastContainer } from "react-toastify";
import ViewProductInCart from "../../hook/cart/view-product-in-cart";

const ProductText = () => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProductsDetailsHook(id);

  const [handleAddtoCart, indexColor, handleColor] = AddToCartHook(id, item);

  return (
    <div>
      <Row>
        <div className="cat-text"> {cat.name}</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item.title}
            <div className="cat-rate d-inline mx-3">{item.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="cat-text d-inline">الماركة :</div>
          <div className="brand-text d-inline">{brand.name}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.availableColors
            ? item.availableColors.map((color, index) => (
                <div
                  className="color border ms-2"
                  onClick={() => handleColor(color, index)}
                  key={index}
                  style={{
                    backgroundColor: color,
                    border: indexColor === index ? "3px solid black" : "none",
                  }}
                ></div>
              ))
            : null}
          <div
            className="color border ms-2"
            style={{ backgroundColor: "#E52C2C" }}
          ></div>
        </Col>
        <Row className="mt-4">
        <Col>
          <div className="cat-text d-inline">الكمية المتاحة :</div>
          <div className="brand-text d-inline">{item.quantity}</div>
        </Col>
      </Row>
      </Row>
      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row>
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          {item.priceAfterDiscount >= 1 ? (
            <div className="product-price d-inline px-3 py-3 border">
             <span style={{textDecorationLine:"line-through"}}>{item.price}</span> {item.priceAfterDiscount} جنية
            </div>
          ) : (
            <div className="product-price d-inline px-3 py-3 border"><span>{item.price}</span>جنية</div> 
          )}
          <div
            className="product-cart-add px-3 py-3 d-inline mx-3"
            onClick={handleAddtoCart}
          >
            اضف للعربة
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductText;
