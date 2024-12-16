import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAddresses, getOneAddress } from '../../Redux/Actions/addressAction'
import notify from '../useNotification'
import ViewProductInCart from '../cart/view-product-in-cart'
import { createOrderCash } from '../../Redux/Actions/checkoutAction'
import { useNavigate } from 'react-router-dom'

const OrderPayCashHook = () => {

     const [loading , setLoading] = useState(true)
     const [loadingCreate , setLoadingCreate] = useState(true)

     const [addressDetails , setAddressDetails ] = useState([])
     const [ , , ,  ,  , cartID] = ViewProductInCart()
     const navigate = useNavigate()

    const dispatch = useDispatch()
    const handelChooseAddress =(e)=>{
        console.log(e.target.value)
        // setAddressDetails([])
        if(e.target.value !== '0'){
          get(e.target.value)
        }

    }
    const get = async (id)=>{
        setLoading(true)
         await dispatch(getOneAddress(id))
         setLoading(false)
     }
  
    const resAddress = useSelector((state)=>state.address.oneAddress)
    useEffect(()=>{
        if(loading === false){
            if(resAddress && resAddress.status === "success"){
                setAddressDetails(resAddress.data)
              }else{
                setAddressDetails([])
              }
        }
           
    },[loading])

    const handleCreateOrderCash = async()=>{
     if(cartID === '0'){
        notify("من فضلك اضف منتجات الى العربة اولا" , "warn")
        return
     }
     setLoadingCreate(true)
      await dispatch(createOrderCash(cartID , {
        shippingAddress:{
            details: addressDetails.details,
            phone: addressDetails.phone,
            city: addressDetails.city,
            postalCode: addressDetails.postalCode
            }
    }))

    setLoadingCreate(false)

    }
    const resCreateOrder = useSelector((state)=>state.cashOrder.createorderCash)
    useEffect(()=>{
     if(loadingCreate === false){
        if(resCreateOrder && resCreateOrder.status === 201){
            notify("تم انشاء الطلب بنجاح" , "success")
            setTimeout(() => {
                navigate("/user/allorders")
            }, 1500);
          } else{
            notify(" هناك خطأ فى اكمال الطلب حاول مرة اخرى" , "warn")
          }
   
     }
    },[loadingCreate])


    return[handelChooseAddress , addressDetails , handleCreateOrderCash]
}

export default OrderPayCashHook
