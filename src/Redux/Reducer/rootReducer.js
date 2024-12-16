import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subcategoryReducer from './subcategoryReducer'
import productReducer from './productsReducer'
import authReducer from './authReducer'
import reviewReducer from './reviewReducer'
import wishlistReducer from './wishlistReducer'
import couponReducer from './couponReducer'
import addressReducer from './addressReducer'
import cartReducer from './cartReducer'
import checkoutReducer from './checkoutReducer'
import ordersReducer from './ordersReducer'
export default combineReducers({
    allcategory : categoryReducer,
    allbrand: brandReducer,
    subcategory : subcategoryReducer,
    allproducts : productReducer,
    auth : authReducer,
    review :reviewReducer,
    wishlist :wishlistReducer,
    coupon : couponReducer,
    address: addressReducer,
    cart : cartReducer,
    cashOrder : checkoutReducer,
    allOrders : ordersReducer

})