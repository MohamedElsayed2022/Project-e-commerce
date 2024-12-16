import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../Redux/Actions/cartAction'
import notify from '../useNotification'

const AddToCartHook = (prodID , item) => {
  
  const res  = useSelector((state)=>state.cart.addToCart)
  const [loading  , setLoading]= useState(true)
  const [oneColor , setOneColor ] = useState('')
  const [indexColor , setIndexColor ] = useState('')
  const [count , setCount] = useState(null)
  const dispatch = useDispatch()
  //handle Color of Product
  useEffect(() => {
        if(prodID === item._id){
          setCount(item.count)
        }
  }, [])
  
  const handleColor = (color , index)=>{
    setOneColor(color)
   setIndexColor(index)
  }

  const handleAddtoCart = async () => {
    if(item.availableColors.length >=1){
      if(oneColor === ""){
        notify("من فضلك اختار لون", "error")
         return
      }
    }else{
      setOneColor("")
    }
    if(prodID === item._id){
      setCount(item.count+1)
    }
    setLoading(true)
    await dispatch(addProductToCart({
        productId : prodID,
        color: oneColor
    }))
    setLoading(false)
  }
  useEffect(()=>{
     if(loading === false){
        if(res && res.status === 200){
            notify("تمت الاضافة الى السلة بنجاح", "success")
            setTimeout(() => {
                window.location.reload(false);
            })            
        }else {
            notify("قم بتسجيل الدخول اولا", "warn")
        }
     }
  },[loading])

 
  return [handleAddtoCart ,indexColor , handleColor]
}

export default AddToCartHook
