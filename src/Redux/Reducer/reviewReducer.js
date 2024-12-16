import {  CREATE_REVIEW, DELETE_RATE_REVIEW, EDIT_RATE_REVIEW, GET_ALL_REVIEWS, GET_ERROR, GET_ONE_REVIEW } from "../type"

const inital = {
    addreview:[],
    oneReview : [],
    allReviews :[],
    DeleteReview :[],
    editReview :[],
    loading : true,

}
const reviewReducer = (state = inital , action)=>{
    switch(action.type){
            case CREATE_REVIEW:
                    return {
                        ...state,
                        addreview : action.payload ,
                        loading : false
                    }
                    case GET_ALL_REVIEWS:
                        return {
                            ...state,
                            allReviews : action.payload ,
                            loading : false
                        }
                    case GET_ONE_REVIEW:
                    return {
                        oneReview : action.payload ,
                        loading : false
                    }
                    case DELETE_RATE_REVIEW:
                        return {
                            DeleteReview : action.payload ,
                            loading : false
                        }
                        case EDIT_RATE_REVIEW:
                            return {
                                editReview : action.payload ,
                                loading : false
                            }
            case GET_ERROR :
                return { allReviews : action.payload , loading : true}
                
            default :
            return state
    }
}

export default reviewReducer