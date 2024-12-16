import {
  ADD_COUPON,
  APPLY_COUPON,
  DELETE_COUPON,
  EDIT_COUPON,
  GET_ALL_COUPONS,
  GET_ONE_COUPON,
} from "../type";

const inital = {
  createCoupon: [],
  coupons: [],
  deletedCoupon: [],
  editCoupon: [],
  oneCoupon: [],
  applyCoupons :[],
  loading: true,
};
const couponReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_COUPON:
      return {
        ...state,
        createCoupon: action.payload,
        loading: false,
      };
    case GET_ALL_COUPONS:
      return {
        ...state,
        coupons: action.payload,
        loading: false,
      };
    case DELETE_COUPON:
      return {
        ...state,
        deletedCoupon: action.payload,
        loading: false,
      };
    case EDIT_COUPON:
      return {
        ...state,
        editCoupon: action.payload,
        loading: false,
      };
      case APPLY_COUPON:
        return {
          ...state,
          applyCoupons: action.payload,
          loading: false,
        };
    case GET_ONE_COUPON:
      return {
        ...state,
        oneCoupon: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default couponReducer;
