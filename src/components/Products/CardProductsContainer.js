import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utils/SubTitle";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductWishlist } from "../../Redux/Actions/wishlistAction";
import notify from "../../hook/useNotification";
import CardContainerHook from "../../hook/product/card-container-hook";

const CardProductsContainer = ({ title, btntitle, PathTitle, products }) => {
    const [favProd] = CardContainerHook()
  return (
    <Container >
      {products ? (
        <SubTitle title={title} btntitle={btntitle} PathTitle={PathTitle} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((product, index) => (
              <ProductCard  item={product} favProd={favProd} key={index} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
