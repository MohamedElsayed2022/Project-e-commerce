import React from "react";
import { Row, Spinner } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";
import UserGetAllOrdersHook from "../../hook/user/user-get-all-orders-hook";
import Pagination from "../utils/Pagination";
import { useDispatch } from "react-redux";
import { getOrdersPage } from "../../Redux/Actions/ordersAction";

const UserAllOrder = () => {
  const [username , results ,paginate , orderData , onPress  ] = UserGetAllOrdersHook();
  console.log("Results: ", results);
  console.log("paginate: ", paginate);
  console.log("orderData: ", orderData);
  console.log("orderData: ", orderData[0]);
  
  return (
    <div>
      <div className="admin-content-text pb-2"> عدد الطلبات # {results} </div>
      <Row className="justify-content-between">
        {orderData.length >=1
          ? orderData.map((order) => (
              <UserAllOrderItem key={order._id} order={order} />
            ))
          :
          <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
            <Spinner animation="border" variant="#55cfdf" />
          </div>
          }
      </Row>
      {
         paginate?.numberOfPages >=2 ? (
          <Pagination pageCount={paginate?.numberOfPages ? paginate?.numberOfPages : 0} onPress={onPress} />

         ) : (null)
      }
    </div>
  );
};

export default UserAllOrder;
