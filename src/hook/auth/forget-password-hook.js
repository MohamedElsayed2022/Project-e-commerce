import React, { useEffect, useState } from 'react'
import notify from '../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../Redux/Actions/authAction';
import { useNavigate } from 'react-router-dom';

const ForgetPasswordHook = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
      const validationValues = () => {
        // || !isValidName(name)
        if (email === "" || !isValidEmail(email)) {
          notify("من فضلك ادخل بريد إلكتروني صحيح", "error");
          return;
        }
       
      };
      const onChangeGmail = (e)=>{
        setEmail(e.target.value)
        localStorage.setItem("user-email" , e.target.value)
      }
      const res = useSelector((state) => state.auth.forgetPassword);

      const OnSubmit = async()=>{
        validationValues()
        setLoading(true)
        await dispatch(forgetPassword({email}))
        setLoading(false)
        setEmail("")
        
      }
      useEffect(()=>{
        if(loading === false){
            if(res){
              console.log(res)
              if(res.data.status === "Success"){
                notify("لقد تم ارسال الكود للايميل بنجاح" , "success")
                setTimeout(() => {
                    navigate("/user/verify-reset-password")
                }, 1000);
               
            }
            if(res.data.status === "fail"){
              notify("  هذا الحساب غير موجود لدينا" , "error")
               
            }
            }
            
        }
      },[loading])

      return [onChangeGmail , email , OnSubmit ]
}

export default ForgetPasswordHook
