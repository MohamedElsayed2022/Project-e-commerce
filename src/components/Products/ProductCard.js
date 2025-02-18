import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import rate from '../../images/rate.png';
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductCardHook from "../../hook/product/product-card-hook";

const ProductCard = ({ item, favProd }) => {
  const [favImg, handleFav] = ProductCardHook(item, favProd);

  return (
    <>
      <Col xs={12} sm={6} md={4} lg={3} className="d-flex">
        <Card
          className="my-2 w-100"
          style={{
            height: "360px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#ffff",
            boxShadow: "0 2px 2px 0 rgba(151, 151, 151, 0.5)",
          }}
        >
          <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
            <Card.Img
              style={{
                height: "228px",
                width: "100%",
                padding: "10px",
              }}
              src={item.imageCover}
              alt={item.title}
            />
          </Link>

          <div className="d-flex justify-content-end mx-2 mt-3">
            <img
              src={favImg}
              alt="Favorite Icon"
              onClick={handleFav}
              className="text-center"
              style={{
                height: "24px",
                width: "26px",
                cursor: "pointer",
              }}
            />
          </div>

          <Card.Body>
            <Card.Title>
              <span className="card-title">{item.title}</span>
            </Card.Title>
            <Card.Text as="div" className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img src={rate} height="16px" width="16px" alt="Rating" />
                <span className="card-rate mx-2">{item.ratingsQuantity}</span>
              </div>
              <div className="d-flex">
                <div className="card-price">
                  {item.priceAfterDiscount >= 1 ? (
                    <div>
                      {item.priceAfterDiscount}
                      <span
                        style={{ textDecorationLine: "line-through" }}
                        className="ms-2"
                      >
                        {item.price}
                      </span>
                    </div>
                  ) : (
                    item.price
                  )}
                </div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <ToastContainer />
      </Col>
    </>
  );
};

export default ProductCard;
