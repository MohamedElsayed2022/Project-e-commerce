import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../useNotification';
import { editCoupon, getOneCoupon } from '../../Redux/Actions/couponAction';
import { useNavigate } from 'react-router-dom';

const EditCouponHook = (id) => {
    const [couponName, setCouponName] =useState('');
    const [couponDate, setCouponDate] = useState('');
    const [couponDiscount, setCouponDiscount] = useState('');
    const [loading , setLoading] = useState(true)
    const [loadingData , setLoadingData] = useState(true)
    const navigate = useNavigate()
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    const dataRef = useRef()
    const dispatch = useDispatch()
    useEffect(()=>{
     const get = async()=>{
        setLoadingData(true)
        await dispatch(getOneCoupon(id)) 
        setLoadingData(false)
     }
     get()
    },[])
    const oneCoupon = useSelector((state)=>state.coupon.oneCoupon)

    useEffect(() => {
      if (loadingData === false) {
          if (oneCoupon.data) {
            setCouponName(oneCoupon.data.name)
              setCouponDate(formatDate(oneCoupon.data.expire))
              setCouponDiscount(oneCoupon.data.discount)
          }
      }
  }, [loadingData])
    
  //   const validationValues = () => {
  //     // || !isValidName(name)
  
  //     if (name === "" ) {
  //       notify("يرجى ادخال اسم المستخدم", "error");
  //       return;
  //     }
  //     if (email === "" || !isValidEmail(email)) {
  //       notify("من فضلك ادخل بريد إلكتروني صحيح", "error");
  //       return;
  //     }
  //     if (phone === "" || phone.length < 10 || phone.length > 15) {
  //       notify("من فضلك اخل رقم الهاتف  (من 10 الى 15 رقما)", "error");
  //       return;
  //     }
  //     if (password === "" || !isValidPassword(password)) {
  //       notify(
  //         "من فضلك ادخل كلمة سر صحيحة (على الأقل 8 أحرف، وتحتوي على أحرف كبيرة وصغيرة وأرقام وأحرف خاصة)",
  //         "error"
  //       );
  //       return;
  //     }
  //     if (password !== confirmPassword) {
  //       notify("كلمة المرور غير متطابقة", "error");
  //       return;
  //     }
  //   };
    const handleChangeName =(e)=>{
      setCouponName(e.target.value)
    }
    const handleChangeDate =(e)=>{
      setCouponDate(e.target.value)
    }
    const handleChangeDiscount =(e)=>{
      setCouponDiscount(e.target.value)
    }
    const handleSubmit = async (e)=>{
      e.persist()
      if(couponName === '' || couponDate === '' || couponDiscount === 0){
          notify('برجاء ملئ الحقول ','warn')
          return
      }
      setLoading(true)
       await dispatch(editCoupon(id,
        {
            name: couponName ,
            expire: couponDate,
            discount: couponDiscount
         }
       ))
      setLoading(false)
      
    }  
    const editedCoupon = useSelector((state)=>state.coupon.editCoupon)

    useEffect(()=>{
        if(loading === false){
          if(editedCoupon){
            console.log(editedCoupon.data)
            if(editedCoupon && editedCoupon.status === 200){
              notify("تم تعديل الكوبون بنجاح" , "success")
              setTimeout(() => {
                navigate("/admin/addcoupon")
              }, 1000);
              setCouponName('')
              setCouponDate("")
              setCouponDiscount('')
            }else{
              notify("هناك مشكلة فى تعديل الكوبون" , "error")
            }
          }
        }
    },[loading])

   

    return [handleChangeName , handleChangeDate , handleChangeDiscount , handleSubmit , couponName , couponDate , couponDiscount , dataRef  ]

}

export default EditCouponHook