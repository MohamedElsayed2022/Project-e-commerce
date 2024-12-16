import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import edit from "../../images/edit.png";
import deleteicon from "../../images/delete.png";
import CouponCardHook from "../../hook/coupon/coupon-card-hook";
const AdminCouponCard = ({ coupon }) => {
  console.log(coupon);
  const [formatDate, dateString, show, handleClose, handleShow, handelDelete] =CouponCardHook(coupon);
  return (
    <div className="user-address-card  px-2 my-3 ">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من عملية الحذف للكوبون ؟</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="dark" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="danger" onClick={handelDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="d-flex justify-content-between ">
        <Col xs="6">
          <div className="p-2">اسم الكوبون: {coupon.name}</div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex ms-2">
              <img
                src={edit}
                height="17px"
                width="15px"
                className="d-inline mt-1 ms-1"
                alt=""
              />
              <Link to={`/admin/edit-coupon/${coupon._id}`} style={{ textDecoration: "none" }}>
                <p className="item-delete-edit d-inline"> تعديل</p>
              </Link>
            </div>
            <div className="d-flex">
              <img
                src={deleteicon}
                height="17px"
                width="15px"
                className="d-inline mt-1 ms-1"
                alt=""
              />
              <Link to="" style={{ textDecoration: "none" }}>
                <p className="item-delete-edit d-inline" onClick={handleShow}>
                  {" "}
                  ازالة
                </p>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="mt-3">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            تاريخ انتهاء الكوبون : {formatDate(dateString)}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="d-flex mt-4">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الخصم نسبة: 
          </div>{" "}
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {coupon.discount} %
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCouponCard;
