import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const AdminAllOrdersItem = ({ order }) => {
  console.log("Order Item :- ", order);
  console.log("Order Cart Item :- ", order.cartItems);

  return (
    <Col sm="12" className="my-2 d-flex px-2">
      <Link to={`/admin/allorders/${order._id}`}  className="cart-item-body-admin my-2 px-1 d-flex text-decoration-none px-2" >
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className="d-flex justify-content-between">
            <div className="cat-text p-2 d-inline">طلب رقم # {order?.id ? order?.id : ''}</div>
          </Col>
        </Row>

        <Row className="justify-content-center ">
        <Col sm="12" className=" d-flex flex-row justify-content-start align-items-center">
            <div className="cat-title pt-2 d-inline">
             طلب من ... {order?.user?.name ? order?.user?.name : ""}
            </div>
            <div style={{color:"black"}} className="d-inline pt-2 cat-rate-admin me-2">
            {order.user.email}

            </div>
          </Col>
        </Row>
      
        
        <Row className="d-flex justify-content-between ">
          <Col sm="6" className=" d-flex ">
            <div>
              <div style={{color:"black"}} className="d-inline">التوصيل</div>
              <div className="d-inline mx-2 " style={{color:"#979797"}}>
                {" "}
                {order?.isDelivered === true ? "تم " : "لم يتم "}
              </div>
            </div>
            <div>
              <div style={{color:"black"}} className="d-inline">الدفع</div>
              <div className="d-inline mx-2 " style={{color:"#979797"}}>
                {" "}
                {order?.isPaid === true ? "تم " : "لم يتم "}
              </div>
            </div>
            <div>
              <div style={{color:"black"}} className="d-inline" >طريقة الدفع </div>
              <div className="d-inline mx-2 " style={{color:"#979797"}}>
                {" "}
                {order?.paymentMethodType === "cash"
                  ? "كاش"
                  : " بطاقة ائتمانية"}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem;
