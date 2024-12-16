import React from "react";
import { Link } from "react-router-dom";

const UserSideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/user/allorders" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            ادارة الطلبات
          </div>
        </Link>
        <Link to="/user/favoriteproducts" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            قائمة المفضلة
          </div>
        </Link>
        <Link to="/user/addresses" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            العنوان الشخصى
          </div>
        </Link>
        <Link to="/user/profile" className="text-decoration-none">
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            الملف الشخصى
          </div>
      </Link>
      </div>
    </div>
  );
};

export default UserSideBar;
