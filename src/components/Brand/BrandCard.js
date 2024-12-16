import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const BrandCard = ({ img, id }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-2 d-flex justify-content-between"
    >
      <Card
        className="my-1"
        style={{
          width: "100%",
          height: "151px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ffff",
        }}
      >
        <Link to={`/products/brand/${id}`} style={{ textDecoration: "none" }}>
          <Card.Img src={img} style={{ height: "151px", width: "100%" }} />
        </Link>
      </Card>
    </Col>
  );
};

export default BrandCard;
