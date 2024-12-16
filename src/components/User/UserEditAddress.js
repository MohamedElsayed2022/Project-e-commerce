import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EditAddressHook from "../../hook/user/edit-address-hook";
import { ToastContainer } from "react-toastify";

const UserEditAddress = () => {
    const {id} = useParams()
    console.log(id)
    const [onChangeAlias , onChangeDetails , onChangePhone , alias , details , phone , handleEdit] = EditAddressHook(id)
    console.log(alias)
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">تعديل العنوان </div>
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
            <button className="btn-save d-inline mt-2 " onClick={handleEdit}>حفظ تعديل العنوان</button>
        </Col>
    </Row>
    <ToastContainer/>
</div>
  );
};

export default UserEditAddress;
