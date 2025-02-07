import React from "react";
import AdminAllProductsCard from "./AdminAllProductsCard";
import { Row, Spinner } from "react-bootstrap";

const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="justify-content-start">
        {!products || products.length === 0 ? (
           <h2 className="text-dark  mt-2">
                   <div className="d-flex justify-content-center align-items-center gap-2 fs-3">
                 <Spinner animation="border" variant="#55cfdf" />
                 <Spinner animation="border" variant="#55cfdf" />
                 <Spinner animation="border" variant="#55cfdf" />
                 <Spinner animation="border" variant="#55cfdf" />
               </div>
               </h2>
        ) : (
          products.map((product) => (
            <AdminAllProductsCard key={product._id} product={product} />
          ))
        )}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
