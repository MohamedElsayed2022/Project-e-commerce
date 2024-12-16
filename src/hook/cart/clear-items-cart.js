import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItemsCart, deleteItemsCart } from '../../Redux/Actions/cartAction'
import notify from '../useNotification'

const ClearItemsCart = (prodID) => {
 const dispatch = useDispatch()
 const [loading , setLoading] = useState(true)
 const res = useSelector((state)=>state.cart.clearItems)

 const handleSubmit = async()=>{
   setLoading(true)
   await dispatch(clearItemsCart())
   setLoading(false)

 }
 useEffect(()=>{
     if(loading === false){
      if (res === "") {
        console.log(res)
        notify("تم حذف جميع المنتجات "  , "success")
        setTimeout(() => {
          window.location.reload(false)
        }, 1000);
      }else{
        notify("حدثت مشكاة اثناء الحذف", "error")
      }
      
     }
 },[loading])

 const [show , setShow] = useState(false)
 const handleClose = () => setShow(false)
 const handleShow = () => setShow(true)
 const handelDeleteItem = async()=>{
  await dispatch(deleteItemsCart(prodID))
  setShow(false)
  window.location.reload(false)
 }



 return [handleSubmit , show , handleClose , handleShow , handelDeleteItem]
}

export default ClearItemsCart
