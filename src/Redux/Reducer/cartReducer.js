import { ADD_TO_CART, CLEAR_ITEMS_CART, CLEAR_Items_CART, CREATE_ADDRESS, CREATE_BRAND, DELETE_ADDRESS, DELETE_ITEM_FROM_CART, GET_ALL_ADDRESSES, GET_ALL_BRANDS, GET_ERROR, GET_ONE_ADDRESS, GET_ONE_BRAND, GET_PRODUCT_CART, GET_PRODUCTS_FROM_CART, UPDATE_ADDRESS, UPDATE_QUANTITY_IN_ITEM } from "../type"

const inital = {
    productsInCart:[],
    addToCart : [],
    productInCart :[],
    clearItems : [],
    deleteOneItem :[],
    updateQuantity : [],
    loading : true,

}
const cartReducer = (state = inital , action)=>{
    switch(action.type){
        
            case GET_PRODUCTS_FROM_CART:
                    return {
                        productsInCart : action.payload ,
                        loading : false
                    }
                    case GET_PRODUCT_CART:
                        return {
                            productInCart : action.payload ,
                            loading : false
                        }
                    case ADD_TO_CART:
                    return {
                        addToCart : action.payload ,
                        loading : false
                    }
                    case CLEAR_ITEMS_CART:
                        return {
                            clearItems : action.payload ,
                            loading : false
                        }
                        case DELETE_ITEM_FROM_CART:
                        return {
                            deleteOneItem : action.payload ,
                            loading : false
                        }
                        case UPDATE_QUANTITY_IN_ITEM:
                            return {
                                updateQuantity : action.payload ,
                                loading : false
                            }

            
          
            default :
            return state
    }
}

export default cartReducer