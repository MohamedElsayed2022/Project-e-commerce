import React from "react";
import {  Col, Row } from "react-bootstrap";

import { ToastContainer } from "react-toastify";
import AddSubCategoryHook from "../../hook/subcategory/add-subcategory-hook";



const AdminSubCategory = () => {
   const [onChangeName , handleChange , category , handleSubmit ] = AddSubCategoryHook()
  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4"> اضافة تصنيف فرعى جديد</div>
        <Col sm="8">
          <input
            type="text"
            onChange={onChangeName}
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2"
            onChange={handleChange}
          >
            <option value="0"> اختر التصنيف الرئيسى</option>
            {category.data
              ? category.data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {" "}
                    {item.name}
                  </option>
                ))
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save mt-2 d-inline" onClick={handleSubmit}>
            حفظ التغييرات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminSubCategory;
