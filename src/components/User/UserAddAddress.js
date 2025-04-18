import React from "react";
import { Col, Row } from "react-bootstrap";
import AddAddressHook from "../../hook/user/add-address-hook";
import { ToastContainer } from "react-toastify";

const UserAddAddress = () => {
    const[onChangeAlias , onChangeDetails ,onChangePhone  ,alias ,details, phone, onSubmit  ] = AddAddressHook()
  return (
    <div>
      <Row className="justify-content-start ">
      <div className="admin-content-text"> اضافة عنوان جديد</div>
        <Col sm="8">
            <input
            value={alias}
            onChange={onChangeAlias}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            />
            <textarea
            value={details}
            onChange={onChangeDetails}
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="العنوان بالتفصيل"
            />
            <input
            value={phone}
            onChange={onChangePhone}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="رقم الهاتف"
            />
           
            
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 " onClick={onSubmit}>اضافة عنوان جديد</button>
        </Col>
    </Row>
    <ToastContainer/>
    </div>
  );
};

export default UserAddAddress;
