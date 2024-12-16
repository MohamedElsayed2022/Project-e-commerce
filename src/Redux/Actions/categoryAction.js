import {useGetData, useGetDataToken }from "../../hooks/useGetData"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { CREATE_CATEGORY, GET_ALL_CATEGORIES, GET_ERROR, GET_ONE_CATEGORY } from "../type"

export const getAllCategory =(limit)=> async(dispatch)=>{
 try{
   const response = await useGetData(`/api/v1/categories/?limit=${limit}`)
   dispatch( {
    type : GET_ALL_CATEGORIES ,
    payload : response 
   })
 }catch(e){
    dispatch( {
        type : GET_ERROR ,
        payload :"ERROR : " + e 
       })
 }
}

export const getAllCategoryPage =(page)=> async(dispatch)=>{
  try{
    const response = await useGetDataToken(`/api/v1/categories/?limit=5&page=${page}`)
    dispatch( {
     type : GET_ALL_CATEGORIES ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : GET_ERROR ,
         payload :"ERROR : " + e 
        })
  }
 }

 //get one gategory
 export const getOneCategory =(id)=> async(dispatch)=>{
  try{
    const response = await useGetDataToken(`/api/v1/categories/${id}`)
    dispatch( {
     type : GET_ONE_CATEGORY ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : GET_ERROR ,
         payload :"ERROR : " + e 
        })
  }
 }


 export const createCategory =(formData)=> async(dispatch)=>{
  try{
    const response = await useInsertDataWithImage(`/api/v1/categories` , formData)
    dispatch( {
     type : CREATE_CATEGORY,
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