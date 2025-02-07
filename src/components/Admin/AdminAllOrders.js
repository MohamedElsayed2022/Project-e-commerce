import React from "react";
import { Row, Spinner } from "react-bootstrap";
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
        {!orderData || orderData.length === 0 ? (
          <h2 className="text-dark  mt-2">
          <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
        <Spinner animation="border" variant="#55cfdf" />
        <Spinner animation="border" variant="#55cfdf" />
        <Spinner animation="border" variant="#55cfdf" />
        <Spinner animation="border" variant="#55cfdf" />
      </div>
        </h2>
        ) : (
          orderData.map((order) => (
            <AdminAllOrdersItem key={order._id} order={order} />
          ))
        )}
      </Row>
      {paginate?.numberOfPages >= 2 && (
        <Pagination
          pageCount={paginate?.numberOfPages || 0}
          onPress={onPress}
        />
      )}
    </div>
  );
};

export default AdminAllOrders;
