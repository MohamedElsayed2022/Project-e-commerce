import useDeleteData from "../../hooks/useDeleteData"
import {useGetData, useGetDataToken }from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { useUpdateData } from "../../hooks/useUpdateData"
import { ADD_COUPON, APPLY_COUPON, DELETE_COUPON, EDIT_COUPON, GET_ALL_COUPONS, GET_ALL_ORDERS, GET_ONE_COUPON, GET_ONE_ORDER, GET_ORDERS_PAGE, UPDATE_ORDER_TO_DELIVERED, UPDATE_ORDER_TO_PAID } from "../type"


// get all orders
export const getAllOrders =(page ,limit  )=> async(dispatch)=>{
    try{
      const response = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}` )
      dispatch( {
       type : GET_ALL_ORDERS,
       payload : response ,
       loading : true
      })
    }catch(e){
       dispatch( {
           type : GET_ALL_ORDERS ,
           payload : e.response
          })
    }
}



// get  one order for admin
export const getOneOrder =(orderID)=> async(dispatch)=>{
  try{
    const response = await useGetDataToken(`/api/v1/orders/${orderID}` )
    dispatch( {
     type : GET_ONE_ORDER,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : GET_ONE_ORDER ,
         payload : e.response
        })
  }
}


//update order to paid 
export const updateOrderToPaid =(orderID)=> async(dispatch)=>{
  try{
    const response = await useUpdateData(`/api/v1/orders/${orderID}/pay` )
    dispatch( {
     type : UPDATE_ORDER_TO_PAID,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : UPDATE_ORDER_TO_PAID ,
         payload : e.response
        })
  }
}


//update order to Delivered 
export const updateOrderToDelivered =(orderID)=> async(dispatch)=>{
  try{
    const response = await useUpdateData(`/api/v1/orders/${orderID}/deliver` )
    dispatch( {
     type : UPDATE_ORDER_TO_DELIVERED,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : UPDATE_ORDER_TO_DELIVERED ,
         payload : e.response
        })
  }
}




