import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotification';
import { verifyResetPassword } from '../../Redux/Actions/authAction';

const VerifyResetPasswordHook = () => {
 
    const [resetCode, setResetCode] = useState("");
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const navigate = useNavigate()

      const onChangeCode = (e)=>{
        setResetCode(e.target.value)
      }
      const res = useSelector((state) => state.auth.verifyResetPassword);

      const OnSubmit = async()=>{
        if(resetCode === ""){
          notify("يرجى ادخال الكود المرسل" , "error")
          return
        }
        setLoading(true)
        await dispatch(verifyResetPassword({resetCode}))
        setLoading(false)
        setResetCode("")
        
       

      }
      useEffect(()=>{
        if(loading === false){
            if(res.data.status === "Success"){
              notify("  كود التفعيل صحيح   " , "success")
                setTimeout(() => {
                  navigate("/user/reset-password")
              }, 1500);
                // setTimeout(() => {
                //     navigate("/user/verify-reset-password")
                // }, 1000);
               
            }
            if(res.data.status === "fail"){
              notify("الكود خطأ او انتهت صلاحيته", "error")
            }
        }
      },[loading])
    return [onChangeCode , resetCode , OnSubmit]
}

export default VerifyResetPasswordHook
