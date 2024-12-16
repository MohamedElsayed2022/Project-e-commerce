import useDeleteData from "../../hooks/useDeleteData"
import { useGetDataToken } from "../../hooks/useGetData"
import { useInsertData } from "../../hooks/useInsertData"
import { useUpdateData } from "../../hooks/useUpdateData"
import { ADD_TO_CART, CLEAR_ITEMS_CART, CLEAR_Items_CART, DELETE_ITEM_FROM_CART, GET_PRODUCT_CART, GET_PRODUCTS_FROM_CART, UPDATE_QUANTITY_IN_ITEM } from "../type"


// get products from cart  
export const getProductsFromCart =()=> async(dispatch)=>{
 try{
   const response = await useGetDataToken(`/api/v1/cart` )
   dispatch( {
    type : GET_PRODUCTS_FROM_CART ,
    payload : response 
   })
 }catch(e){
    dispatch( {
        type : GET_PRODUCTS_FROM_CART ,
        payload : e.response
       })
 }
}

// add  product to cart  
export const addProductToCart =(body)=> async(dispatch)=>{
    try{
      const response = await useInsertData(`/api/v1/cart` , body )
      dispatch( {
       type : ADD_TO_CART ,
       payload : response 
      })
    }catch(e){
       dispatch( {
           type : ADD_TO_CART ,
           payload : e.response
          })
    }
   }

   // show  items in cart  
export const productCart =()=> async(dispatch)=>{
  try{
    const response = await useGetDataToken(`/api/v1/cart`)
    dispatch( {
     type : GET_PRODUCT_CART ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : GET_PRODUCT_CART ,
         payload : e.response
        })
  }
 }

    // clear items from cart  
export const clearItemsCart =()=> async(dispatch)=>{
  try{
    const response = await useDeleteData(`/api/v1/cart`)
    dispatch( {
     type : CLEAR_ITEMS_CART ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : CLEAR_ITEMS_CART ,
         payload : e.response
        })
  }
 }


     // delete item from cart  
export const deleteItemsCart =(id)=> async(dispatch)=>{
  try{
    const response = await useDeleteData(`/api/v1/cart/${id}`)
    dispatch( {
     type : DELETE_ITEM_FROM_CART ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : DELETE_ITEM_FROM_CART ,
         payload : e.response
        })
  }
 }

     // update quantity of item in cart  
export const updateQuantity =(id , body)=> async(dispatch)=>{
  try{
    const response = await useUpdateData(`/api/v1/cart/${id}` , body)
    dispatch( {
     type : UPDATE_QUANTITY_IN_ITEM ,
     payload : response 
    })
  }catch(e){
     dispatch( {
         type : UPDATE_QUANTITY_IN_ITEM ,
         payload : e.response
        })
  }
 }
   