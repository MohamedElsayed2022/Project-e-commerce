import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteRate, deleteReviewOnProduct } from '../../Redux/Actions/reviewAction'
import notify from '../useNotification'

const DeleteRateHook = (review) => {
    const dispatch = useDispatch()
    const [isUser , setIsUser] = useState(false)
    const [loading , setLoading] = useState(true)
    const [showDelete, setShowDelete] = useState(false);
    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true);

  let user = JSON.parse(localStorage.getItem("user"))


  useEffect(() => {
    try {
        if (review.user._id === user._id) {
            setIsUser(true);
        }
    } catch (e) { }
}, [])


const handelDelete = async () => {
    setLoading(true)
    await dispatch(deleteReviewOnProduct(review._id))
    setLoading(false)
    handleClose();
}
const res = useSelector((state)=>state.review.DeleteReview)

useEffect(() => {
    if (loading === false) {
        console.log(res)
        if (res === "") {
            notify("تم حذف التقييم بنجاح", "success")
            setTimeout(() => {
                window.location.reload(false)
            }, 500);
        }
        else
            notify("هناك مشكله فى عملية الحذف", "error")
    }
}, [loading])
      

  return [isUser ,  handleClose , handleShow , handelDelete , showDelete ]
}

export default DeleteRateHook
