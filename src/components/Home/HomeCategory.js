import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utils/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import Spinner from 'react-bootstrap/Spinner';
import HomeCategoryHook from "../../hook/category/home-category-hook";

const HomeCategory = () => {
  const [colors, category, loading] = HomeCategoryHook();

  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" PathTitle="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {
          !loading ? (
            category?.data?.length > 0 ? (
              category.data.slice(0, 5).map((item, index) => (
                <CategoryCard
                  key={item.id || index} // Ensure each item has a unique key
                  id={item._id}
                  title={item.name}
                  background={colors[index]}
                  img={item.image}
                />
              ))
            ) : (
              <h4 className="text-center text-danger mt-2">لايوجد تصنيفات</h4>
            )
          ) : (
            <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
              <Spinner animation="border" style={{ color: '#000' }} className="text-center" />
              <Spinner animation="border" style={{ color: '#000' }} className="text-center" />
              <Spinner animation="border" style={{ color: '#000' }} className="text-center" />
              <Spinner animation="border" style={{ color: '#000' }} className="text-center" />
            </div>
          )
        }
      </Row>
    </Container>
  );
};

export default HomeCategory;
