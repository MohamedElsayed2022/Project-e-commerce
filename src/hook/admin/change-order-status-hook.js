import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrderToPaid } from '../../Redux/Actions/ordersAction'
import notify from '../useNotification'

const ChangeOrderStatusHook = (id) => {
    const [loading , setLoading] = useState(true)
    // const [order , setOrder] = useState([])
    const [statusPay , setStatusPay] = useState(0)
   const dispatch = useDispatch()
    const [cartItems , setCartItems] = useState([])
     

    const onChangePaid = (e)=>{
        console.log("Target :-" , e.target.value)
        setStatusPay(e.target.value)
        
    }

    const changePayOrder = async()=>{
        if(statusPay === "true"){
            setLoading(true)
            await dispatch(updateOrderToPaid(id))
            setLoading(false)
        }else if(statusPay === '0'){
            notify("من فضلك اختار حالة الطلب" , "error")
        }

        
        
       }
    
    const changePay = useSelector((state)=>state.allOrders.paidOrderStatus)

    if(changePay)
        console.log("Order Details :-" , changePay.data)

    useEffect(()=>{
        if(loading === false){
          if(changePay && changePay.status === 200){
            notify("تم تغير الحالة بنجاح" , "success")
            setTimeout(() => {
                window.location.reload(false)
            }, 1000);

          }else{
              notify("حدث خطأ اثناء تغيير الحالة"  , "error")
          }
          
        }
      },[loading])

      return [ onChangePaid  , statusPay , changePayOrder]
}

export default ChangeOrderStatusHook