import { CREATE_BRAND, GET_ALL_BRANDS, GET_ALL_ORDERS, GET_ERROR, GET_ONE_BRAND, GET_ONE_ORDER, GET_ORDERS_PAGE, UPDATE_ORDER_TO_DELIVERED, UPDATE_ORDER_TO_PAID } from "../type"

const inital = {
    allorders:[],
    orderPage :[],
    oneOrder : [],
    paidOrderStatus : [],
    updatedToDelivered: [],
    loading : true,

}
const ordersReducer = (state = inital , action)=>{
    switch(action.type){
        case GET_ALL_ORDERS: 
            return {...state , allorders :action.payload , loading : false}
            case GET_ORDERS_PAGE: 
            return {...state , orderPage :action.payload , loading : false}
            case GET_ONE_ORDER: 
            return {...state , oneOrder :action.payload , loading : false}
            case UPDATE_ORDER_TO_PAID: 
            return {...state , paidOrderStatus :action.payload , loading : false}
           case UPDATE_ORDER_TO_DELIVERED : 
           return {...state , updatedToDelivered :action.payload , loading : false}

            case GET_ERROR :
                return {...state , allorders : action.payload , loading : true}
                
            default :
            return state
    }
}

export default ordersReducer