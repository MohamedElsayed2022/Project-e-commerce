import { CREATE_REVIEW, GET_ALL_REVIEWS, GET_ERROR , DELETE_RATE_REVIEW, EDIT_RATE_REVIEW } from "../type"
import { useInsertData } from "../../hooks/useInsertData"
import { useGetData, useGetDataToken } from "../../hooks/useGetData"
import useDeleteData from "../../hooks/useDeleteData"
import { useUpdateData } from "../../hooks/useUpdateData"

export const createReview =( id , data )=> async(dispatch)=>{
    try{
      const response = await useInsertData(`/api/v1/products/${id}/reviews` , data )
      dispatch( {
       type : CREATE_REVIEW,
       payload : response ,
       loading : true
      })
    }catch(e){
       dispatch( {
           type : GET_ERROR ,
           payload :"ERROR : " + e 
          })
    }
}

//get sub-category depend on category id

export const getAllReviews = (prodID, page, limit) => async (dispatch) => {
  try {
      const response = await useGetDataToken(`/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`);

      dispatch({
          type: GET_ALL_REVIEWS,
          payload: response,
      })

  } catch (e) {
      dispatch({
          type: GET_ERROR,
          payload: e.response,
      })
  }
}

//delete review to one product 
export const deleteReviewOnProduct = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/reviews/${id}`);

        dispatch({
            type: DELETE_RATE_REVIEW,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: DELETE_RATE_REVIEW,
            payload: e.response,
        })
    }
}

//Edit  review to one product 
export const updateReviewOnProduct = (id, body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/reviews/${id}`, body);

        dispatch({
            type: EDIT_RATE_REVIEW,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: EDIT_RATE_REVIEW,
            payload: e.response,
        })
    }
}