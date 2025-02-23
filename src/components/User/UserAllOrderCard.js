import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserAllOrderCard = ({ cart }) => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    if (cart) {
      setItems(cart);
    }
  }, [cart]);

  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs="3" md="2" className="d-flex justify-content-start">
          <Link
            to={`/products/${items?.product?._id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              width="93px"
              height="120px"
              src={ items?.product?.imageCover} //`${"http://127.0.0.1:8000/products/"}`+
              alt=""
              className="rounded"
            />
          </Link>
        </Col>
        <Col xs="8" md="6">
          <div className="d-inline pt-2 cat-title">
            {items?.product?.title ? items?.product?.title : ""}
          </div>
          <div className="d-inline pt-2 cat-rate me-2">
            {items?.product?.ratingsAverage || 0}
          </div>
          <div className="rate-count d-inline p-1 pt-2">
            ({items?.product?.ratingsQuantity || 0} تقييم)
          </div>
          <div className="mt-3 d-flex">
            <div className="cat-text d-inline mt-1">الكميه</div>
            <input
              value={items?.count}
              className="mx-2"
              type="number"
              style={{ width: "40px", height: "30px" }}
            />
             <div
            className="color border ms-2  "
            style={{ backgroundColor: items?.color }} // Corrected style usage
          ></div>
          </div>
         
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderCard;
