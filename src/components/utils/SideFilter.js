import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SidebarSearchHook from "../../hook/search/sidebar-search-hook";

const SideFilter = () => {
  const [category, brand, clickCategory, clickBrand, PriceFrom, PriceTo] = SidebarSearchHook();
  let localFrom = localStorage.getItem("PriceFrom");
  let localTo = localStorage.getItem("PriceTo");

  return (
    <div className="sidebar-container  p-3" style={{marginTop:"32px"}}>
      <Row>
        {/* تصفية الفئات */}
        <Col xs={12} md={6} lg={12} className="mb-4">
          <div className="filter-title">الفئة</div>
          <Form>
            <Form.Check
              type="checkbox"
              label="الكل"
              value="0"
              onChange={clickCategory}
              className="filter-item"
            />
            {category && category.length > 0 ? (
              category.map((cat) => (
                <Form.Check
                  key={cat._id}
                  type="checkbox"
                  label={cat.name}
                  value={cat._id}
                  onChange={clickCategory}
                  className="filter-item"
                />
              ))
            ) : (
              <h6>لا يوجد فئات</h6>
            )}
          </Form>
        </Col>

        {/* تصفية الماركات */}
        <Col xs={12} md={6} lg={12} className="mb-4">
          <div className="filter-title">الماركة</div>
          <Form>
            <Form.Check
              type="checkbox"
              label="الكل"
              value="0"
              onChange={clickBrand}
              className="filter-item"
            />
            {brand && brand.length > 0 ? (
              brand.map((brand) => (
                <Form.Check
                  key={brand._id}
                  type="checkbox"
                  label={brand.name}
                  value={brand._id}
                  onChange={clickBrand}
                  className="filter-item"
                />
              ))
            ) : (
              <h6>لا يوجد ماركات</h6>
            )}
          </Form>
        </Col>

        {/* تصفية السعر */}
        <Col xs={12} className="mb-4">
          <div className="filter-title">السعر</div>
          <div className="price-filter">
            <div className="d-flex align-items-center mb-2">
              <span className="filter-sub me-2">من:</span>
              <Form.Control
                value={localFrom}
                onChange={PriceFrom}
                type="number"
                className="price-input"
              />
            </div>
            <div className="d-flex align-items-center">
              <span className="filter-sub me-2">إلى:</span>
              <Form.Control
                value={localTo}
                onChange={PriceTo}
                type="number"
                className="price-input"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SideFilter;