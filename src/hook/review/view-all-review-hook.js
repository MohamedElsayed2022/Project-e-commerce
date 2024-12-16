import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReviews } from '../../Redux/Actions/reviewAction'

const ViewAllReviewHook = (ProID) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true)
      await dispatch(getAllReviews(ProID, 1, 5))
      setLoading(false)
    }

    fetchReviews()
  }, [dispatch, ProID])

  const allReview = useSelector((state) => state.review.allReviews)

  const onPress = async (page) => {
    setLoading(true)
    await dispatch(getAllReviews(ProID, page, 5))
    setLoading(false)
  }

  return [allReview, onPress]
}

export default ViewAllReviewHook
