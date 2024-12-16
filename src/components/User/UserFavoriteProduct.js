import React from "react";
import { Row } from "react-bootstrap";
import CardProductsContainer from "../Products/CardProductsContainer";
import FavouriteProductsHook from "../../hook/user/favourite-products-hook";

const UserFavoriteProduct = () => {
  const [favProd] = FavouriteProductsHook()

  return (
    <>
      <div className="admin-content-text pb-2"> قائمة المفضلة </div>
      <Row className="justify-content-start">
        {favProd ? (
          <CardProductsContainer products={favProd} title="" btntitle="" />
        ) : (
          <h2 className="text-danger text-center align-items-center justify-content-center mt-2">
            لاتوجد منتجات مفضلة حاليا
          </h2>
        )}
      </Row>
    </>
  );
};

export default UserFavoriteProduct;
