import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
import MultiImageInput from "react-multiple-image-input";

import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import AdminEditProductsHook from "../../hook/product/edit-product-hook";
const AdminEditProducts = () => {
  const { id } = useParams();

  const [
    CatID,
    BrandID,
    onChangeDesName,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefor,
    onChangeProdName,
    showColor,
    category,
    brand,
    priceAftr,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handelChangeComplete,
    removeColor,
    onSeletCategory,
    handelSubmit,
    onSeletBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
  ] = AdminEditProductsHook(id);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">
          {" "}
          تعديل المنتج - {prodName}
        </div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>

          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={4}
          />

          <input
            value={prodName}
            onChange={onChangeProdName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={prodDescription}
            onChange={onChangeDesName}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={priceBefore}
            onChange={onChangePriceBefor}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
            value={priceAftr}
            onChange={onChangePriceAfter}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
            value={qty}
            onChange={onChangeQty}
          />
          <select
            name="cat"
            value={CatID}
            onChange={onSeletCategory}
            className="select input-form-area mt-3 px-2 "
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
            name="brand"
            value={BrandID}
            onChange={onSeletBrand}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">اختر ماركة</option>
            {brand.data
              ? brand.data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>

          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1
              ? colors.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => removeColor(color)}
                    className="color ms-2 border  mt-1"
                    style={{ backgroundColor: color }}
                  ></div>
                ))
              : null}

            <img
              onClick={onChangeColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handelChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminEditProducts;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { Col, Row, ToastContainer } from "react-bootstrap";
// import Multiselect from "multiselect-react-dropdown";
// import MultiImageInput from "react-multiple-image-input";
// import add from "../../images/add.png";
// import { CompactPicker } from "react-color";
// import AdminAddProductHook from "../../hook/product/add-product-hook";
// import AdminEditProductHook from "../../hook/product/edit-product-hook";
// const AdminEditProducts = () => {
//   const { id } = useParams();
//   console.log(id);
//   const [
//     CatID,
//     BrandID,
//     onChangeDesName,
//     onChangeQty,
//     onChangeColor,
//     onChangePriceAfter,
//     onChangePriceBefor,
//     onChangeProdName,
//     showColor,
//     category,
//     brand,
//     priceAftr,
//     images,
//     setImages,
//     onSelect,
//     onRemove,
//     options,
//     handelChangeComplete,
//     removeColor,
//     onSeletCategory,
//     handelSubmit,
//     onSeletBrand,
//     colors,
//     priceBefore,
//     qty,
//     prodDescription,
//     prodName,
//   ] = AdminEditProductHook(id);
//   return (
//     <div>
//       <Row className="justify-content-start">
//         <div className="admin-content-text pb-4">
//           {" "}
//           تعديل المنتج - {prodName}
//         </div>
//         <Col sm="8">
//           <div className="mb-2">صور المنتج</div>{" "}
//           <MultiImageInput
//             images={images}
//             setImages={setImages}
//             backgroundColor="white"
//             theme={"light"}
//             max={4}
//           />
//           <input
//             type="text"
//             className="input-form d-block mt-3 px-3"
//             placeholder="اسم المنتج"
//             value={prodName}
//             onChange={onChangeProdName}
//           />
//         </Col>
//         <Col sm="8">
//           <textarea
//             className="input-form-area p-2 mt-3"
//             rows="4"
//             cols="50"
//             placeholder="وصف المنتج"
//             value={prodDescription}
//             onChange={onChangeDesName}
//           />{" "}
//         </Col>
//         <Col sm="8">
//           <input
//             type="number"
//             className="input-form d-block mt-3 px-3"
//             placeholder="السعر قبل الخصم"
//             value={priceBefore}
//             onChange={onChangePriceBefor}
//           />
//         </Col>
//         <Col sm="8">
//           <input
//             type="number"
//             className="input-form d-block mt-3 px-3"
//             placeholder=" الكمية المتاحة"
//             value={qty}
//             onChange={onChangeQty}
//           />
//         </Col>
//         <Col sm="8">
//           <input
//             type="number"
//             className="input-form d-block mt-3 px-3"
//             placeholder="السعر بعد الخصم"
//             value={priceAftr}
//             onChange={onChangePriceAfter}
//           />
//           <select
//             name="languages"
//             id="lang"
//             className="select input-form-area mt-3 px-2 "
//             onChange={onSeletCategory}
//             value={CatID}
//           >
//             <option value="0">التصنيف الرئيسي</option>
//             {category.data
//               ? category.data.map((item) => (
//                   <option key={item._id} value={item._id}>
//                     {item.name}
//                   </option>
//                 ))
//               : null}
//           </select>
//           <Multiselect
//             className="mt-2 text-end"
//             placeholder="التصنيف الفرعي"
//             options={options}
//             onSelect={onSelect}
//             onRemove={onRemove}
//             displayValue="name"
//             style={{ color: "red" }}
//           />
//           <select
//             name="languages"
//             id="lang"
//             className="select input-form-area mt-3 px-2 "
//             onChange={onSeletBrand}
//             value={BrandID}
//           >
//             <option value="0"> اختار ماركة</option>
//             {brand.data
//               ? brand.data.map((item) => (
//                   <option value={item._id} key={item._id}>
//                     {item.name}
//                   </option>
//                 ))
//               : null}
//           </select>
//           <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
//           <div className="d-flex mt-1">
//             {colors &&
//               colors.map((color, index) => (
//                 <div
//                   onClick={() => removeColor(color)}
//                   key={index} // Adding a key for React list rendering performance
//                   className="color border ms-2 mt-1"
//                   style={{ backgroundColor: color }} // Corrected style usage
//                 ></div>
//               ))}

//             <img
//               onClick={onChangeColor}
//               src={add}
//               alt=""
//               width="30px"
//               height="35px"
//               className=""
//               style={{ cursor: "pointer" }}
//             />
//             {showColor === true ? (
//               <CompactPicker onChangeComplete={handelChangeComplete} />
//             ) : null}
//           </div>
//         </Col>
//       </Row>
//       <Row>
//         <Col sm="8" className="d-flex justify-content-end">
//           <button className="btn-save d-inline mt-2" onClick={handelSubmit}>
//             حفظ التغييرات
//           </button>
//         </Col>
//       </Row>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminEditProducts;
