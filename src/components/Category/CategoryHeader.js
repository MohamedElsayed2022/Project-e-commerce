import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllCategoryPage from "../../hook/category/all-category-page-hook";
import { Link } from "react-router-dom";
import AllCategoryPageHook from "../../hook/category/all-category-page-hook";

const CategoryHeader = () => {
  const [getPage, loading, pageCount, category] = AllCategoryPageHook();
  const [items , setItems] = useState([])
  useEffect(()=>{
     if(category)
      setItems(category.data)

  },[category])
  return (
    <div className="cat-header ">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            {items
              ? items.map((cat, index) => {
                  return (
                    <Link
                      to={`/products/category/${cat._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div key={index} className="cat-text-header">
                        {cat.name}
                      </div>
                    </Link>
                  );
                })
              : null}
            <Link to={`/allcategory`} style={{ textDecoration: "none" }}>
              <div className="cat-text-header">المزيد</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
