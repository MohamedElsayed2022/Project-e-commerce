import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import edit from "../../images/edit.png";
import deleteicon from "../../images/delete.png";
import { Link } from "react-router-dom";
import ViewAddressesHook from "../../hook/user/view-addresses-hook";
import DeleteAddressHook from "../../hook/user/delete-address-hook";
const UserAddressCard = ({address}) => {
  const [ show , handleClose , handleShow ,  handelDelete] = DeleteAddressHook(address._id)

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
          <div className="font">هل انتا متاكد من عملية الحذف للعنوان ؟</div>
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
        <Col xs="4">
          <div className="p-2">{address.alias}</div>
        </Col>
        <Col xs="4" className="d-flex justify-content-end">
          <div className="d-flex p-2">
          <div className="d-flex ms-2">
              <img
                src={edit}
                height="17px"
                width="15px"
                className="d-inline mt-1 ms-1"
                alt=""
              />
              <Link to={`/user/edit-address/${address._id}`} style={{ textDecoration: "none" }}>
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
              <Link to="" style={{ textDecoration: "none" }} onClick={handleShow}>
                <p className="item-delete-edit d-inline"> ازالة</p>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            {address.details}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="d-flex mt-3">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:
          </div>{" "}
          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {address.phone}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;
