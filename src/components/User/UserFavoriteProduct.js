import React from "react";
import { Row, Spinner } from "react-bootstrap";
import CardProductsContainer from "../Products/CardProductsContainer";
import FavouriteProductsHook from "../../hook/user/favourite-products-hook";

const UserFavoriteProduct = () => {
  const [favProd] = FavouriteProductsHook();

  return (
    <>
      <div className="admin-content-text"> قائمة المفضلة </div>
      <Row className="justify-content-start" style={{marginTop:"-13px"}}>
        {favProd && favProd.length > 0 ? (
          <CardProductsContainer products={favProd} title="" btntitle="" />
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
      </Row>
    </>
  );
};

export default UserFavoriteProduct;