import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/admin/allorders" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            اداره الطلبات
          </div>
        </Link>
        <Link to="/admin/allproducts" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            اداره المنتجات
          </div>
        </Link>
        <Link to="/admin/addbrand" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            اضف ماركه{" "}
          </div>
        </Link>
        <Link to="/admin/addcategory" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            اضف تصنيف
          </div>
        </Link>
        <Link to="/admin/addsubcategory" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            اضف تصنيف فرعي
          </div>
        </Link>
        <Link to="/admin/addproduct" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            اضف منتج
          </div>
        </Link>
        <Link to="/admin/addcoupon" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            اضف كود خصم
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
