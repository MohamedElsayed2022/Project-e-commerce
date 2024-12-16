import { CREATE_SUBCATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type"
import { useInsertData } from "../../hooks/useInsertData"
import {useGetData }from "../../hooks/useGetData"

export const createSubCategory =(data)=> async(dispatch)=>{
    try{
      const response = await useInsertData(`/api/v1/subcategories` , data )
      dispatch( {
       type : CREATE_SUBCATEGORY,
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

export const getOneCategory =(id)=> async(dispatch)=>{
  try{
    const response = await useGetData(`/api/v1/categories/${id}/subcategories`)
    console.log(response.data)
    dispatch( {
     type : GET_SUB_CATEGORY,
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