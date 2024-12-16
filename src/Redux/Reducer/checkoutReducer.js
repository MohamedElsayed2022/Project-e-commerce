import { ADD_TO_CART, CLEAR_ITEMS_CART, CLEAR_Items_CART, CREATE_ADDRESS, CREATE_BRAND, CREATE_ORDER_CASH, DELETE_ADDRESS, DELETE_ITEM_FROM_CART, GET_ALL_ADDRESSES, GET_ALL_BRANDS, GET_ERROR, GET_ONE_ADDRESS, GET_ONE_BRAND, GET_PRODUCT_CART, GET_PRODUCTS_FROM_CART, UPDATE_ADDRESS, UPDATE_QUANTITY_IN_ITEM } from "../type"

const inital = {
    createorderCash:[],
    loading : true,

}
const checkoutReducer = (state = inital , action)=>{
    switch(action.type){
        
            case CREATE_ORDER_CASH:
                    return {
                        ...state,
                        createorderCash : action.payload ,
                        loading : false
                    }
                    
                   

            
          
            default :
            return state
    }
}

export default checkoutReducer