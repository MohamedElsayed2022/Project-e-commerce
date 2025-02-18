import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateReviewOnProduct } from '../../Redux/Actions/reviewAction'
import notify from '../useNotification'

const EditRateHook = (review) => {
    const dispatch = useDispatch()
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true); 
    const [loading , setLoading] = useState(true)   
    const [newRateText , setNewRateText] = useState(review.review)
    const [newRateValue , setNewRateValue] = useState(review.rating)

    const onChangeRateText =(e)=>{
      setNewRateText(e.target.value)
    }
    const OnChangeRateValue =(val)=>{
      setNewRateValue(val)
    }
    const res = useSelector((state)=>state.review.editReview)
    const handelEdit =async()=>{
      setLoading(true)
     await dispatch(updateReviewOnProduct(review._id, {
        review: newRateText,
        rating: newRateValue
    }))
    setLoading(false)
    handleCloseEdit()
    }
    useEffect(()=>{
       if(loading === false){
        if(res.status && res.status === 200){
           notify("تم تعديل المنتج بنجاح " , "success")
           setTimeout(() => {
             window.location.reload(false)
           }, 1000);
        }else
           notify("هناك خطأ فى تعديل التقييم" , "error")

       }
    },[loading])
    
    

    return [newRateText , showEdit , handleCloseEdit , handleShowEdit, OnChangeRateValue , onChangeRateText , handelEdit , newRateValue ]

}

export default EditRateHook
