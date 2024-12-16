import React from "react";
import { Col, Row } from "react-bootstrap";
import avater from "../../images/avatar.png";
import AddBrandHook from "../../hook/brand/add-brand-hook";
import { ToastContainer } from "react-toastify";

const AdminAddBrand = () => {
    const [
        img,
        name,
        selectedFile,
        loading,
        onImageChange,
        isPress,
        handleSubmit,
        onChangName,
      ] = AddBrandHook()
  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">اضف ماركة جديدة</div>
        <Col sm="8">
          <div className="text-form pb-2">صورة الماركة</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              onChange={onImageChange}
            />
          </div>{" "}
          <input
            type="text"
            value={name}
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الماركة"
            onChange={onChangName}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2">حفظ التغييرات</button>
        </Col>
      </Row>
      <ToastContainer />


    </div>
  );
};

export default AdminAddBrand;
