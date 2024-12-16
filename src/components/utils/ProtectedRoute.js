import { Navigate, Outlet } from "react-router-dom";
import notify from "../../hook/useNotification";

const ProtectedRoute = ({ auth ,children }) => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (auth === false) {
    // إذا لم يكن المستخدم مسجلاً للدخول، يتم توجيهه إلى صفحة تسجيل الدخول
    // return <Navigate to="/login" replace />;
    // notify("هذا المكان لايمكن الوصول اليه" , "error")
  }

  return children ? children : <Outlet/>; // إذا كان المستخدم مسجلاً للدخول، يتم عرض المكون المطلوب
};

export default ProtectedRoute;