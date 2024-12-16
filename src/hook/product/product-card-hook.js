import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import favoff from '../../images/fav-off.png'
import favon from '../../images/fav-on.png'
import { addProductToWishlist, removeProductFromWishlist } from '../../Redux/Actions/wishlistAction'
import notify from '../useNotification'
const ProductCardHook = (item , favProd) => {
    const dispatch = useDispatch()

    let Fav = favProd.some(fitem=>fitem === item._id )
    const [favImg , setFavImg] = useState(favoff)
    const [isFav , setIsFav] = useState(Fav)
    const [loadingAdd, setLoadingAdd] = useState(true)
    const [loadingRemove, setLoadingRemove] = useState(true)

    useEffect(() => {
        setIsFav(favProd.some(fitem => fitem === item._id))
    }, [favProd])
  
    const handleFav = () => {
        if (isFav) {
            removeFromWishlistData();
        } else {
            addToWishlistData()
        }
    }
    useEffect(() => {
        if (isFav === true) {
            setFavImg(favon)
        }
        else {
            setFavImg(favoff)
        }

    }, [isFav])
    
  
    const resAdd = useSelector((state)=>state.wishlist.addToWishlist)
    const resRemove = useSelector((state)=>state.wishlist.removeWishlist)
  
    const addToWishlistData = async()=>{
        setIsFav(true)
        setFavImg(favon)
        setLoadingAdd(true)
      await dispatch(addProductToWishlist({
        productId: item._id,
    }))
    setLoadingAdd(false)
    }


    useEffect(() => {
        if (loadingAdd === false) {
            console.log(resAdd)
            if (resAdd && resAdd.status === 200) {
                notify("تمت اضافة المنتج للمفضلة بنجاح", "success")
            } else if (resAdd && resAdd.status === 401) {
                notify("انتا غير مسجل", "error")
            }else {
                notify("قم بتسجيل الدخول اولا", "warn")
            }
        }
    }, [loadingAdd])


    const removeFromWishlistData = async()=>{
       setIsFav(false)
        setFavImg(favoff)
        setLoadingRemove(true)
      await dispatch(removeProductFromWishlist(item._id))
      setLoadingRemove(false)
      
  
    }
  
    useEffect(() => {
        if (loadingRemove === false) {
            console.log(resRemove)
            if (resRemove && resRemove.status === "success") {
                notify("تم حذف المنتج من المفضلة بنجاح", "warn")
            } else if (resAdd && resAdd.status === 401) {
                notify("انتا غير مسجل", "error")
            }

        }
    }, [loadingRemove])


  return [favImg , handleFav ]
    
}


export default ProductCardHook
