import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import { ToastContainer } from "react-toastify";
import ClearItemsCart from "../../hook/cart/clear-items-cart";
import UpdateCountCartHook from "../../hook/cart/update-count-cart-hook";

const CardItem = ({ product }) => {
  const [handleSubmit, show, handleClose, handleShow, handelDeleteItem] =
  ClearItemsCart(product._id);
  const [handleUpdateCart , itemCount , onChangeCount] = UpdateCountCartHook(product)
  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font"> هل انتا متاكد من حذف المنتج من العربة ؟</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="dark" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="danger" onClick={handelDeleteItem}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
   <div style={{width:"200px" , height:"100%"}}>
   <img
        src={product?.product?.imageCover || mobile}
        width="150px"
        height="100%"
        style={{borderRadius:"10px"}}
        alt=""
      />
   </div>
    
      <div className="w-100 p-3">
        <Row className="justify-content-between">
          <Col sm="12" className="d-flex justify-content-between">
            <div className="cat-text p-2 d-inline">
              {product?.product?.category?.name || ""}
            </div>
            <div className="d-flex pt-2">
              <img
                src={deleteicon}
                height="24px"
                width="20px"
                alt="Delete Item"
                style={{ cursor: "pointer" }}
                onClick={handleShow}
              />
              <div className="cat-text me-2 d-inline">ازالة </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center  ">
          <Col sm="12" className=" d-flex flex-row  justify-content-start align-items-center">
            <div className="cat-title pt-2 d-inline">
              {product?.product?.title}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">
              {product?.product?.ratingsAverage || 0}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-3 d-flex">
            <div className="cat-text d-inline">الماركة : </div>
            <div className="barnd-text me-1 d-inline mx-1">
              {product?.product?.brand?.name}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            {product.color === "" ? null : (
              <div
                className="color ms-2 border"
                style={{ backgroundColor: product?.color }}
              ></div>
            )}
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row   justify-content-between">
          <div className="d-inline pt-2 d-flex">
              <div className="cat-text mt-2  d-inline">الكميه</div>
              <input
                value={itemCount}
                onChange={onChangeCount}
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
              <Button onClick={handleUpdateCart} className='btn btn-dark' >تطبيق</Button>
            </div>
            <div className="d-inline pt-2 barnd-text">{product.price || 0} جنية</div>
          
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </Col>
  );
};

export default CardItem;
