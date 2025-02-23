import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import prod1 from "../../images/prod1.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/Actions/productsAction";
const AdminAllProductsCard = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handelDelete = async () => {
    await dispatch(deleteProduct(product._id));
    setShow(false);
    window.location.reload();
  };

  return (
    <Col xs="12" sm="6" md="4" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من عملية الحذف للمنتج</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="danger" onClick={handelDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      <Card
        className="my-2 "
        style={{
          width: "100%",
          height: "390px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ffff",
          boxShadow: "0 2px 2px 0 rgba(151 , 151 , 151 , .5)",
        }}
      >
        <Row className="d-flex justify-content-center px-2 pt-1">
          <Col className="d-flex justify-content-between">
            <div className="item-delete-edit d-inline" onClick={handleShow}>
              أزالة
            </div>
            <Link
              to={`/admin/editproduct/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="item-delete-edit d-inline">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            variant="top"
            src={product.images[0]}
            style={{ height: "228px", width: "100%" }}
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favoff}
            alt=""
            className="text-center"
            style={{ height: "24px", width: "26px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{product.title}</div>
          </Card.Title>
          <Card.Text className="d-flex justify-content-between align-items-center ">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img src={rate} height="16px" width="16px" alt="" />
                <div className="card-rate mx-2">{product.ratingsQuantity}</div>
              </div>
            </div>
            <div className="d-flex">
              <div className="card-price">
                {product.priceAfterDiscount >= 1 ? (
                  <div>
                    <span style={{ textDecorationLine: "line-through" }}>
                      {product.price}
                    </span>
                    {"    "}{product.priceAfterDiscount}
                  </div>
                ) : (
                  product.price
                )}
              </div>
              <div className="card-currency mx-1">جنيه</div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
