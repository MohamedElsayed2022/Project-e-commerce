import { ADD_TO_WISHLIST, GET_ERROR, REMOVE_FROM_WISHLIST, USER_WISHLIST } from "../type"

const inital = {
    addToWishlist:[],
    allWishlist : [],
    removeWishlist : [],
    loading : true,

}
const wishlistReducer = (state = inital , action)=>{
    switch(action.type){
            case ADD_TO_WISHLIST:
                    return {
                        ...state,
                        addToWishlist : action.payload ,
                        loading : false
                    }
                    case REMOVE_FROM_WISHLIST:
                    return {
                        ...state,
                        removeWishlist : action.payload ,
                        loading : false
                    }
                    case USER_WISHLIST:
                        return {
                            ...state,
                            allWishlist : action.payload ,
                            loading : false
                        }
                   
            case GET_ERROR :
                return { allWishlist : action.payload , loading : true}
                
            default :
            return state
    }
}

export default wishlistReducer