import React, { useEffect, useState } from "react";
import UserAllOrderCard from "./UserAllOrderCard";
import { Col, Row } from "react-bootstrap";
import Pagination from "../utils/Pagination";

const UserAllOrderItem = ({order}) => {
  
  console.log("Order Status :- " , order.isDelivered)
  console.log(order.cartItems)
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

  return (
    <>
     <div className="user-order mt-2 p-3">
      <Row>
        <div className="py-2 order-title">طلب رقم #{order.id || 0}... تم بتاريخ...({formatDate(order.createdAt)})</div>
      </Row>
       {
        order && order.cartItems ? (
          order.cartItems.map((cart , index)=>{
            return <UserAllOrderCard key={index} cart={cart} />
          })
        ) : (
          <div class="d-flex justify-content-center gap-2">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )
       }
      <Row className="d-flex justify-content-between align-items-center">
        <Col xs="6" className="d-flex">
          <div>
            <div className="d-inline">التوصيل</div>
            <div className="d-inline mx-2 stat" > {order?.isDelivered === true ? 'تم ' : 'لم يتم '}</div>
          </div>
          <div>
            <div className="d-inline">الدفع</div>
            <div className="d-inline mx-2 stat"> {order?.isPaid === true ? 'تم ' : 'لم يتم '}</div>
          </div>
          <div>
            <div className="d-inline">طريقة الدفع </div>
            <div className="d-inline mx-2 stat"> {order?.paymentMethodType === 'cash' ? 'كاش' : ' بطاقة ائتمانية'}</div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">{order.totalOrderPrice} جنيه</div>
          </div>
        </Col>
      </Row>

    </div>

    </>
   
  );
};

export default UserAllOrderItem;
