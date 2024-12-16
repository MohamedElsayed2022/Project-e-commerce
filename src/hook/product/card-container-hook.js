import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductWishlist } from '../../Redux/Actions/wishlistAction'

const CardContainerHook = () => {
    const [loading , setLoading] = useState(true)
    const [favProd , setFavProd] = useState([])
    const res = useSelector((state)=>state.wishlist.allWishlist)
    
     const dispatch = useDispatch()
     useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getProductWishlist())
            setLoading(false)
        }

        get();
    }, [])
    
    useEffect(() => {

        if (loading === false) {
            if (res && res.data.length >= 1) {
                setFavProd(res.data.map(item => item._id))
            } else setFavProd([])
        }

    }, [loading])


     return [favProd]
}

export default CardContainerHook
