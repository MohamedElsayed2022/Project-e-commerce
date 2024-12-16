import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../utils/Pagination";
import ViewAllReviewHook from "../../hook/review/view-all-review-hook";
import { useParams } from "react-router-dom";
const RateContainer = ({ rateQty, rateAvg }) => {
  const { id } = useParams();
  const [allReview, onPress] = ViewAllReviewHook(id);
  const Reviews = allReview?.data || [];

  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">
            ({`${rateQty}  تقيم`})
          </div>
        </Col>
      </Row>

      <RatePost />

      {Reviews ? (
        Reviews.map((review, index) => {
          return <RateItem key={index} review={review} />;
        })
      ) : (
        <div
          class="spinner-border text-center d-flex justify-content-center mt-2 mx-auto"
          role="status"
        ></div>
      )}

      {allReview?.paginationResult &&
      allReview?.paginationResult?.numberOfPages >= 2 ? (
        <Pagination
          pageCount={
            allReview?.paginationResult
              ? allReview?.paginationResult?.numberOfPages
              : 0
          }
          onPress={onPress}
        />
      ) : null}
    </Container>
  );
};

export default RateContainer;

// <Container className="rate-container">
//   <Row>
//     <Col className="d-flex align-items-center">
//       <div clas="sub-tile d-inline p-1">التقييمات</div>
//       <img
//         src={rate}
//         alt="Rate"
//         className="me-2"
//         height="16px"
//         width="16px"
//       />
//       <div className="cat-rate d-inline  p-1 pt-2">{rateAvg}</div>
//       <div className="rate-count d-inline p-1 pt-2">({rateQty} تقييم)</div>
//     </Col>
//   </Row>
//   <RatePost  />
//   {allReviews.data ? (
//     allReviews.data.map((review , index) =>{
//        return (<RateItem key={index} review={review} />)
//     })
//   ) : (
//     <div class="spinner-border text-center d-flex justify-content-center mt-2 mx-auto"role="status"></div>
//   )}
//   {allReviews.paginationResult &&
//   allReviews.paginationResult.numberOfPages >= 2 ? (
//     <Pagination
//       pageCount={
//         allReviews.paginationResult
//           ? allReviews.paginationResult.numberOfPages
//           : 0
//       }
//       onPress={onPress}
//     />
//   ) : null}{" "}
// </Container>
