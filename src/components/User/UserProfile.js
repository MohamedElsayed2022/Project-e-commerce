import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Edit from "../../images/edit.png";
import EditUserProfileHook from "../../hook/user/edit-user-profile-hook";
import { ToastContainer } from "react-toastify";
const UserProfile = () => {
  
  const  [
    show,
    onChangeEmail,
    onChangeName,
    onChangePhone,
    handleClose,
    handleShow,
    handelEdit,
    onChangeCurPass,
    onChangePass,
    onChangePassConfirm,
    handleChangePassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
    name,
    email,
    phone,
    user,
  ]= EditUserProfileHook();

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font"> تعديل بيانات المستخدم</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">
              <input
              value={name}
              onChange={onChangeName}
                type="text"
                className="input-form d-block mt-1 px-3"
                placeholder="ادخل  ألاسم "
              />
                <input
                value={phone}
                onChange={onChangePhone}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="ادخل رقم الهاتف"
              />
                <input
                value={email}
                onChange={onChangeEmail}
                type="email"
                className="input-form d-block mt-3 px-3"
                placeholder="ادخل الايميل"
              />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="dark" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="success" onClick={handelEdit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="admin-content-text">الصفحه الشخصية</div>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">الاسم:</div>
            <div className="p-1 item-delete-edit"> {user.name}</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={Edit}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit" onClick={handleShow}>
                {" "}
                تعديل
              </p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">رقم الهاتف:</div>
            <div className="p-1 item-delete-edit">{user.phone}</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">الايميل:</div>
            <div className="p-1 item-delete-edit">{user.email}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div className="admin-content-text">تغير كملة المرور</div>
            <input
            value={oldPassword}
            onChange={onChangeCurPass}
              type="password"
              className="input-form d-block mt-2 px-3"
              placeholder="ادخل كلمة المرور القديمة"
            />
            <input
            value={newPassword}
            onChange={onChangePass}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="ادخل كلمة المرور الجديدة"
            />
            <input
            value={confirmNewPassword}
            onChange={onChangePassConfirm}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="تأكيد كلمة المرور الجديده"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 " onClick={handleChangePassword}>حفظ كلمة السر</button>
          </Col>
        </Row>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default UserProfile;
