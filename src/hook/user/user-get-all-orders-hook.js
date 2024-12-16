import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../Redux/Actions/ordersAction'

const UserGetAllOrdersHook = () => {
    const [loading , setLoading]  = useState(true)
    const [results , setResults]= useState(0)
    const [paginate , setPaginate]= useState({})
    const [orderData , setOrderData]= useState([])


    const user = JSON.parse(localStorage.getItem("user"))
    let username
    if(user != null){
        username = user.name
    }
    const dispatch = useDispatch()
    const get =async()=>{
        setLoading(true)
        await dispatch(getAllOrders('' , 5))
        setLoading(false)
    }
    useEffect(()=>{
        get()
    },[])
    const onPress =async(page)=>{
        setLoading(true)
        await dispatch(getAllOrders(page , 5))
        setLoading(false)

    }
    const orders = useSelector(state=>state.allOrders.allorders)
    useEffect(()=>{
      if(loading === false){
        if(orders.results)
            setResults(orders.results)
        if(orders.paginationResult)
        setPaginate(orders.paginationResult)
    if(orders.data)
        setOrderData(orders.data)
        console.log(orders)
      }
    },[loading])

    return [username , results ,paginate , orderData , onPress  ]
}

export default UserGetAllOrdersHook
