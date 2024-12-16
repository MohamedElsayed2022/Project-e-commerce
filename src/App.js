import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/utils/Footer";
import NavbarLogin from "./components/utils/NavbarLogin";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategory from "./pages/Category/AllCategoryPage";
import AllBrandPage from "./pages/Brand/AllBrandPage";
import ShopProductPage from "./pages/Products/ShopProductPage";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import ChoosePayMethodPage from "./pages/Checkout/ChoosePayMethodPage";
import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./pages/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage";
import UserAllAddressPage from "./pages/User/UserAllAddressPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import AdminEditProductPage from "./pages/Admin/AdminEditProductPage";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import VerifyResetPassword from "./pages/Auth/VerifyResetPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import AdminAddCoupon from "./pages/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./pages/Admin/AdminEditCouponPage";
import ProtectedRouteHook from "./hook/auth/protected-route-hook";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import ProductByCategory from "./pages/Products/ProductByCategory";
import ProductByBrand from "./pages/Products/ProductByBrand";


function App() {
  const [isAdmin, isUser, userData] = ProtectedRouteHook()
  return (
    <div className="font">
      <NavbarLogin />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/allcategory" element={<AllCategory />} />
        <Route path="/allbrand" element={<AllBrandPage />} />
        <Route path="/products" element={<ShopProductPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/user/verify-reset-password" element={<VerifyResetPassword />} />
        <Route path="/user/reset-password" element={<ResetPassword />} />
        <Route path="/products/category/:id" element={<ProductByCategory />} />
        <Route path="/products/brand/:id" element={<ProductByBrand />} />



        {/* <Route path="/order/paymethoud" element={
          <ProtectedRoute auth={isUser}>
            <ChoosePayMethodPage/>
          </ProtectedRoute>
          } /> */}

        <Route element={<ProtectedRoute auth={isAdmin} />}>
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/allorders/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path="/admin/editproduct/:id" element={<AdminEditProductPage />} />
          <Route path="/admin/addcoupon" element={<AdminAddCoupon />} />
          <Route path="/admin/edit-coupon/:id" element={<AdminEditCouponPage />} />
        </Route>

        <Route element={<ProtectedRoute auth={isUser} />}>
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethodPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/addresses" element={<UserAllAddressPage />} />
          <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
