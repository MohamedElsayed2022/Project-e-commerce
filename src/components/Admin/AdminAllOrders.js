import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import UserGetAllOrdersHook from "../../hook/user/user-get-all-orders-hook";
import Pagination from "../utils/Pagination";

const AdminAllOrders = () => {
  const [username, results, paginate, orderData, onPress] =
    UserGetAllOrdersHook();

  return (
    <div>
      <div className="admin-content-text">ادارة جميع الطلبات</div>
      <Row className="justify-content-start">
        {orderData ? (
          orderData.map((order) => (
            <AdminAllOrdersItem key={order._id} order={order} />
          ))
        ) : (
          <div class="d-flex justify-content-center">
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
        )}
        
      </Row>
      {paginate?.numberOfPages >= 2 ? (
        <Pagination
          pageCount={paginate?.numberOfPages ? paginate?.numberOfPages : 0}
          onPress={onPress}
        />
      ) : null}
    </div>
  );
};

export default AdminAllOrders;
