import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productCart } from '../../Redux/Actions/cartAction'
import notify from '../useNotification'
import { getOneProduct } from '../../Redux/Actions/productsAction'

const ViewProductInCart = (product) => {
    const [loading , setLoading] = useState(true)
    const [cartNum , setCartNum] = useState(null)
    const [cartItems , setCartItems] = useState([])
    const [couponNameRes , setCouponNameRes] = useState('')
    const [totalCartPrice , setTotalCartPrice]= useState(0)
    const [totalCartPriceAfterDiscount , setTotalCartPriceAfterDiscount]= useState(0)
    const [cartID , setCartID] = useState('0')

    const prod = useSelector((state)=>state.cart.productInCart)


    const dispatch = useDispatch()
    useEffect(()=>{
         const get = async()=>{
            setLoading(true)
           await dispatch(productCart())
           setLoading(false)
         }
         get()
    },[])

    useEffect(()=>{
        if(loading === false){
            if(prod && prod.status === "success"){
                setCartNum(prod.numOfCartItems)
                setCartItems(prod.data.products)
                setCartID(prod.data._id)
                setTotalCartPrice(prod.data.totalCartPrice)
                if(prod.data.coupon){
                    setCouponNameRes(prod.data.coupon)
                }else{
                    setCouponNameRes('')
                }
                if(prod.data.totalAfterDiscount){
                    setTotalCartPriceAfterDiscount(prod.data.totalAfterDiscount)
                }else{
                    setTotalCartPriceAfterDiscount('')
                }

            }else{
                setCartNum('0')
                setCartID(0)
                setCartItems([])
                setTotalCartPrice(0)
                setTotalCartPriceAfterDiscount('')
                setCouponNameRes('')
            }
        }

    },[loading])

    return [cartNum , cartItems , couponNameRes , totalCartPrice , totalCartPriceAfterDiscount , cartID]
    
}
export default ViewProductInCart