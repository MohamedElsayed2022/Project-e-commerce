import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneOrder } from "../../Redux/Actions/ordersAction"

const AdminGetOneOrderHook = (id) => {
    const [loading , setLoading] = useState(true)
    const [order , setOrder] = useState([])
    const [cartItems , setCartItems] = useState([])


    const dispatch = useDispatch()
    const get = async()=>{
        setLoading(true)
           await dispatch(getOneOrder(id))
           setLoading(false)
       }
    useEffect(()=>{
       get()
    },[])
    const oneOrder = useSelector((state)=>state.allOrders.oneOrder)
    if(oneOrder)
        console.log("Order Details :-" , oneOrder.data)

    useEffect(()=>{
        if(loading === false){
          if(oneOrder.data)
            setOrder(oneOrder.data)
        if(oneOrder.cartItems)
            setCartItems(oneOrder.cartItems)
        }
      },[loading])

      return [order , cartItems]
}
export default AdminGetOneOrderHook
