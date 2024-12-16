import useDeleteData from "../../hooks/useDeleteData"
import { useGetDataToken } from "../../hooks/useGetData"
import { useInsertData} from "../../hooks/useInsertData"
import { useUpdateData } from "../../hooks/useUpdateData"
import { CREATE_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES, GET_ONE_ADDRESS, UPDATE_ADDRESS } from "../type"


// create new address 
export const createAddress =(body)=> async(dispatch)=>{
 try{
   const response = await useInsertData(`/api/v1/addresses` , body)
   dispatch( {
    type : CREATE_ADDRESS ,
    payload : response 
   })
 }catch(e){
    dispatch( {
        type : CREATE_ADDRESS ,
        payload : e.response
       })
 }
}

// get all addresses 
export const getAllAddresses =()=> async(dispatch)=>{
  try{
    const response = await useGetDataToken(`/api/v1/addresses` )
    dispatch( {
     type : GET_ALL_ADDRESSES ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : GET_ALL_ADDRESSES ,
         payload : e.response
        })
  }
 }

 // delete one addresse 
export const deleteOneAddress =(id)=> async(dispatch)=>{
  try{
    const response = await useDeleteData(`/api/v1/addresses/${id}` )
    dispatch( {
     type : DELETE_ADDRESS ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : DELETE_ADDRESS ,
         payload : e.response
        })
  }
 }

  // get one addresse 
export const getOneAddress =(id)=> async(dispatch)=>{
  try{
    const response = await useGetDataToken(`/api/v1/addresses/${id}` )
    dispatch( {
     type : GET_ONE_ADDRESS ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : GET_ONE_ADDRESS ,
         payload : e.response
        })
  }
 }

   // update one addresse 
export const updateAddress =(id , body)=> async(dispatch)=>{
  try{
    const response = await useUpdateData(`/api/v1/addresses/${id}` , body)
    dispatch( {
     type : UPDATE_ADDRESS ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : UPDATE_ADDRESS ,
         payload : e.response
        })
  }
 }