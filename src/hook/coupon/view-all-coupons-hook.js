import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoupons } from '../../Redux/Actions/couponAction'

const ViewAllCouponsHook = () => {
    const dispatch = useDispatch()
    const all = useSelector((state)=>state.coupon.coupons)

    useEffect(()=>{
      const get = async()=>{
        await dispatch(getAllCoupons())
      }
      get()
      console.log(all)
    },[])
}

export default ViewAllCouponsHook
