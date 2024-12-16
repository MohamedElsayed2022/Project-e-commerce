import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import HomeBrandHook from "../../hook/brand/home-brand-hook";

const BrandContainer = ({data , loading}) => {
  // const [brand, ] = HomeBrandHook();

  console.log("Data :- " , data)


  return (
    <div>
      <Container style={{ minHeight: "670px" }}>
        <div className="admin-content-text mt-3">كل الماركات </div>
        <Row className="my-2 d-flex justify-content-between">
        {
                    loading === false ? (
                      data? (
                        data.slice(0, 5).map((item, index) => {
                          return (<BrandCard id={item._id} key={index} img={item.image} />)
                            })
                        ) : <h4>لا يوجد ماركات</h4>
                    ) :
                    <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
            <Spinner
              animation="border"
              variant="#55cfdf"
              className="text-center "
            />
          </div>
                }
        </Row>
      </Container>
    </div>
  );
};

export default BrandContainer;
