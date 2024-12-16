import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCoupon, getAllCoupons } from '../../Redux/Actions/couponAction';
import notify from "../../hook/useNotification";

const AddCouponHook = () => {
  const [couponName, setCouponName] =useState('');
  const [couponDate, setCouponDate] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [loading , setLoading] = useState(true)
  const dataRef = useRef()
  const dispatch = useDispatch()
  
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
        notify('برجاء ملئ الحقول ','error')
        return
    }
    setLoading(true)
     await dispatch(addCoupon({
        name :couponName ,
        expire : couponDate,
        discount : couponDiscount
    }))
    setLoading(false)
    
  }

  
  const res = useSelector((state)=>state.coupon.createCoupon)
  useEffect(() => {

    if (loading === false) {
        if (res && res.status === 201) {
            notify("تمت اضافة الكوبون بنجاح", "success")
            window.location.reload(false)
        } else if (res && res.status === 400) {
            notify("هذا الكوبون موجود من قبل ", "error")
        }
        else if (res && res.status === 403) {
            notify("انتا غير مسموح لك بالاضافة", "error")
        }

    }

}, [loading])


  //get all coupons 
  const allCoupons = useSelector((state)=>state.coupon.coupons)

  useEffect(()=>{
    const get = async()=>{
      await dispatch(getAllCoupons())
    }
    get()
    console.log(allCoupons)
  },[])

  let coupons = []
  if(allCoupons){
    coupons = allCoupons.data
  }


  return [handleChangeName , handleChangeDate , handleChangeDiscount , handleSubmit , couponName , couponDate , couponDiscount , dataRef , coupons]
}

export default AddCouponHook
