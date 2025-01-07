import React from "react";
import { Col, Row } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import add from "../../images/add.png";
import { CompactPicker } from "react-color";
import AdminAddProductHook from "../../hook/product/add-product-hook";
import { ToastContainer } from "react-toastify";

  
const AdminAddProduct = () => {
 
   const  [
    images,
    setImages,
    prodName,
    onChaneName,
    prodDescription,
    onChangDescription,
    priceBefore,
    onChangePriceBe,
    onChangePriceAf,
    qty,
    onChaneQuantity,
    priceAfter,
    onSelectCategory,
    category,
    options,
    onSelect,
    onRemove,
    onSelectedBrand,
    brand,
    colors,
    removeColor,
    setShowColor,
    showColor,
    handleChangeComplete,
    handleSubmit
  ] = AdminAddProductHook()
  // const onImageChange = () => {};

  console.log("Brands :- " , brand?.data)
  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">اضف منتج جديد</div>
        <Col sm="8">
          <div className="mb-2">صور المنتج</div>{" "}
          <MultiImageInput
            images={images}
            setImages={setImages}
            backgroundColor="white"
            theme={"light"}
            max={4}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={prodName}
            onChange={onChaneName}
          />
        </Col>
        <Col sm="8">
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={prodDescription}
            onChange={onChangDescription}
          />{" "}
        </Col>
        <Col sm="8">
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={priceBefore}
            onChange={onChangePriceBe}
          />
        </Col>
        <Col sm="8">
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder=" الكمية المتاحة"
            value={qty}
            onChange={onChaneQuantity}
          />
        </Col>
        <Col sm="8">
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
            value={priceAfter}
            onChange={onChangePriceAf}
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectCategory}
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectedBrand}
          >
            <option value="0"> اختار ماركة</option>
            {brand.data
              ? brand.data.map((item , index) => (
                  <option value={item._id} key={index}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="d-flex mt-1">
            {colors &&
              colors.map((color , index) => (
                <div
                onClick={()=>removeColor(color)}
                  key={index} // Adding a key for React list rendering performance
                  className="color border ms-2 mt-1"
                  style={{ backgroundColor: color }} // Corrected style usage
                ></div>
              ))}

            <img
              onClick={() => setShowColor(!showColor)}
              src={add}
              alt=""
              width="30px"
              height="35px"
              className=""
              style={{ cursor: "pointer" }}
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handleChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save d-inline mt-2" onClick={handleSubmit} >حفظ التغييرات</button>
        </Col>

      </Row>
      <ToastContainer />

    </div>
  );
};

export default AdminAddProduct;
