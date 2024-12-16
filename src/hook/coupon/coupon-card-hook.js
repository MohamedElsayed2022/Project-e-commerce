import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCoupon } from '../../Redux/Actions/couponAction';
import notify from '../useNotification';

const CouponCardHook = (coupon) => {
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(true)
    const dateString = coupon.expire;
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    ///deletedCoupon
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const handelDelete = async()=>{
        setShow(true)
        setLoading(true)
          await dispatch(deleteCoupon(coupon._id))
        setLoading(false)
        setShow(false)

    }
          const res = useSelector((state)=>state.coupon.deletedCoupon)

    useEffect(()=>{
       if(loading === false){
        console.log(res)
        if (res === "") {
            notify("تم حذف الكوبون بنجاح", "success")
            setTimeout(() => {
                window.location.reload(false)
            }, 500);
        }
       }
    },[loading])

    return [formatDate, dateString, show, handleClose, handleShow, handelDelete]
}

export default CouponCardHook
