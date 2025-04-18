import { Navigate, Outlet } from "react-router-dom";
import notify from "../../hook/useNotification";

const ProtectedRoute = ({ auth, children }) => {
  let user = JSON.parse(localStorage.getItem("user"));

  if (auth === false) {
    notify("هذا المكان لايمكن الوصول اليه", "error");

    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
