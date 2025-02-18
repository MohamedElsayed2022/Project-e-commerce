import {useGetData }from "../../hooks/useGetData"
import { useInsertData, useInsertDataWithImage } from "../../hooks/useInsertData"
import { CREATE_BRAND, CREATE_ORDER_CASH, GET_ALL_BRANDS, GET_ERROR, GET_ONE_BRAND } from "../type"

export const createOrderCash =(id , data)=> async(dispatch)=>{
    try{
      const response = await useInsertData(`/api/v1/orders/${id}` , data)
      dispatch( {
       type : CREATE_ORDER_CASH,
       payload : response ,
       loading : true
      })
    }catch(e){
       dispatch( {
           type : CREATE_ORDER_CASH ,
           payload : e.respone
          })
    }
  }