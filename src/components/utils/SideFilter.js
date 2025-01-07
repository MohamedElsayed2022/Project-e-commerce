import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SidebarSearchHook from "../../hook/search/sidebar-search-hook";

const SideFilter = () => {
    const [category , brand , clickCategory , clickBrand , PriceFrom , PriceTo] = SidebarSearchHook()
    let localFrom = localStorage.getItem("PriceFrom")
    let localTo = localStorage.getItem("PriceTo")

  return (
    <div className="mt-3">
       <Row >
                {/* تصفية الفئات */}
                <Col xs={12} md={6} lg={12} className="mb-3">
                    <div className="filter-title">الفئة</div>
                    <Form>
                        <Form.Check 
                            type="checkbox" 
                            label="الكل" 
                            value="0" 
                            onChange={clickCategory} 
                        />
                        {category && category.length > 0 ? (
                            category.map((cat) => (
                                <Form.Check 
                                    key={cat._id} 
                                    type="checkbox" 
                                    label={cat.name} 
                                    value={cat._id} 
                                    onChange={clickCategory} 
                                />
                            ))
                        ) : (
                            <h6>لايوجد فئات</h6>
                        )}
                    </Form>
                </Col>


                <Col xs={12} md={6} lg={12} className="mb-3 mt-3">
                    <div className="filter-title ">الماركة</div>
                    <Form>
                        <Form.Check 
                            type="checkbox" 
                            label="الكل" 
                            value="0" 
                            onChange={clickBrand} 
                        />
                        {brand && brand.length > 0 ? (
                            brand.map((brand) => (
                                <Form.Check 
                                    key={brand._id} 
                                    type="checkbox" 
                                    label={brand.name} 
                                    value={brand._id} 
                                    onChange={clickBrand} 
                                />
                            ))
                        ) : (
                            <h6>لايوجد ماركات</h6>
                        )}
                    </Form>
                </Col>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
          value={localFrom}
          onChange={PriceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
          value={localTo}
          onChange={PriceTo}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;




























// import React from "react";
// import { Row } from "react-bootstrap";
// import SidebarSearchHook from "../../hook/search/sidebar-search-hook";

// const SideFilter = () => {
//     const [category , brand , clickCategory , clickBrand , PriceFrom , PriceTo] = SidebarSearchHook()
//     let localFrom = localStorage.getItem("PriceFrom")
//     let localTo = localStorage.getItem("PriceTo")

//   return (
//     <div className="mt-3">
//       <Row >
//         <div className="d-flex flex-column mt-2">
//           <div className="filter-title">الفئة</div>
//           <div className="d-flex mt-3">
//             <input onChange={clickCategory} type="checkbox" value="0" />
//             <div className="filter-sub me-2 ">الكل</div>
//           </div>
//           {category && category.length > 0
//             ? category.map((cat) => (
//                 <div className="d-flex mt-2" key={cat._id}>
//                   <input onChange={clickCategory} type="checkbox" value={cat._id} />
//                   <div className="filter-sub me-2">{cat.name}</div>
//                 </div>
//               ))
//             : <h6>لايوجد فئات</h6>}

         
//         </div>

//         <div className="d-flex flex-column mt-2">
//           <div className="filter-title mt-3">الماركة</div>
//           <div className="d-flex mt-3">
//             <input onChange={clickBrand} type="checkbox" value="0" />
//             <div className="filter-sub me-2 ">الكل</div>
//           </div>
//           {brand && brand.length > 0
//             ? brand.map((brand) => (
//                 <div className="d-flex mt-2" key={brand._id}>
//                   <input onChange={clickBrand} type="checkbox" value={brand._id} />
//                   <div className="filter-sub me-2">{brand.name}</div>
//                 </div>
//               ))
//             : <h6>لايوجد ماركات</h6>}
//         </div>

//         <div className="filter-title my-3">السعر</div>
//         <div className="d-flex">
//           <p className="filter-sub my-2">من:</p>
//           <input
//           value={localFrom}
//           onChange={PriceFrom}
//             className="m-2 text-center"
//             type="number"
//             style={{ width: "50px", height: "25px" }}
//           />
//         </div>
//         <div className="d-flex">
//           <p className="filter-sub my-2">الي:</p>
//           <input
//           value={localTo}
//           onChange={PriceTo}
//             className="m-2 text-center"
//             type="number"
//             style={{ width: "50px", height: "25px" }}
//           />
//         </div>
//       </Row>
//     </div>
//   );
// };

// export default SideFilter;
