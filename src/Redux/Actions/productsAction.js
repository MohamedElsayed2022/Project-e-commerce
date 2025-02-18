import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_BY_BRAND, GET_ALL_PRODUCTS_BY_CATEGORY, GET_ERROR, GET_ONE_PRODUCT, GET_PRODUCT_LIKE, UPDATE_PRODUCT } from "../type"
import { useInsertDataWithImage } from "../../hooks/useInsertData"
import {useGetData, useGetDataToken }from "../../hooks/useGetData"
import useDeleteData from "../../hooks/useDeleteData"
import { useUpdateDataWithImage } from "../../hooks/useUpdateData"

export const createProduct =(data)=> async(dispatch)=>{
    try{
      const response = await useInsertDataWithImage(`/api/v1/products` , data )
      dispatch( {
       type : CREATE_PRODUCT,
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

//get all products 

export const getAllProducts =(limit)=> async(dispatch)=>{
  try{
    const response = await useGetData(`/api/v1/products?limit=${limit}`)
    dispatch( {
     type : GET_ALL_PRODUCTS,
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

//get all products page

export const getAllProductsPage =(page)=> async(dispatch)=>{
  try{
    const response = await useGetData(`api/v1/products?limit=10&page=${page}`)
    dispatch( {
     type : GET_ALL_PRODUCTS,
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

//get all products with query string
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
      const response = await useGetData(`/api/v1/products?${queryString}`);
      dispatch({
          type: GET_ALL_PRODUCTS,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: GET_ERROR,
          payload: "Error " + e,
      })
  }
}




//get specific product depend on product id

export const getOneProduct =(id)=> async(dispatch)=>{
  try{
    const response = await useGetData(`/api/v1/products/${id}`)
    dispatch( {
     type : GET_ONE_PRODUCT,
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

//get specific product depend on product id

export const getProductLike =(id)=> async(dispatch)=>{
  try{
    const response = await useGetData(`api/v1/products/?category=${id}`)
    dispatch( {
     type : GET_PRODUCT_LIKE,
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

//delete specific product depend on product id

export const deleteProduct =(id)=> async(dispatch)=>{
  try{
    const response = await useDeleteData(`api/v1/products/${id}`)
    dispatch( {
     type : DELETE_PRODUCT,
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

//update specific product depend on product id

export const updateProducts =(id , data)=> async(dispatch)=>{
  try{
    const response = await useUpdateDataWithImage(`/api/v1/products/${id}` , data)
    dispatch( {
     type : UPDATE_PRODUCT,
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

//update specific product depend on product id

export const getAllProductsByCategory =(limit , page , categoryID)=> async(dispatch)=>{
  try{
    const response = await useGetDataToken(`/api/v1/products?limit=${limit}&page=${page}&category=${categoryID}`)
    dispatch( {
     type : GET_ALL_PRODUCTS_BY_CATEGORY,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : GET_ALL_PRODUCTS_BY_CATEGORY ,
         payload : e.response 
        })
  }
}


//get all products By Barnd

export const getAllProductsByBrand =(limit , page , brandID)=> async(dispatch)=>{
  try{
    const response = await useGetDataToken(`/api/v1/products?limit=${limit}&page=${page}&brand=${brandID}`)
    dispatch( {
     type : GET_ALL_PRODUCTS_BY_BRAND,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : GET_ALL_PRODUCTS_BY_BRAND ,
         payload : e.response 
        })
  }
}