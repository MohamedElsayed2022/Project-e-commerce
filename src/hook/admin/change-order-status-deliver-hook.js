import React, { useEffect, useState } from 'react'
import { updateOrderToDelivered } from '../../Redux/Actions/ordersAction'
import notify from '../useNotification'
import { useDispatch, useSelector } from 'react-redux'

const ChangeOrderStatusDeliverHook = (id) => {
    const [loading , setLoading] = useState(true)
    // const [order , setOrder] = useState([])
    const [statusDelivered , setStatusDelivered] = useState(0)
   const dispatch = useDispatch()
    // const [cartItems , setCartItems] = useState([])
     

    const onChangeDelivered = (e)=>{
        console.log("Target Delivered :-" , e.target.value)
        setStatusDelivered(e.target.value)
        
    }

    const changeDeliOrder = async()=>{
        if(statusDelivered === "true"){
            setLoading(true)
            await dispatch(updateOrderToDelivered(id))
            setLoading(false)
        }else if(statusDelivered === '0'){
            notify("من فضلك اختار حالة الطلب" , "error")
        }        
       }
    
    const changeDelivered = useSelector((state)=>state.allOrders.updatedToDelivered)

    

    useEffect(()=>{
        if(loading === false){
          if(changeDelivered && changeDelivered.status === 200){
            notify("تم توصيل الطلب بنجاح" , "success")
            setTimeout(() => {
                window.location.reload(false)
            }, 1000);

          }else{
              notify("حدث خطأ اثناء تغيير الحالة"  , "error")
          }
          
        }
      },[loading])

      return [ onChangeDelivered  , statusDelivered , changeDeliOrder]
}

export default ChangeOrderStatusDeliverHook
