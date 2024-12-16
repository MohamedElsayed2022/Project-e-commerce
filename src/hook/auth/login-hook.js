import React, { useEffect, useState } from 'react'
import notify from '../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/Actions/authAction';
import { json, useNavigate } from 'react-router-dom';

const LoginHook = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const dispatch = useDispatch()
    const onEmailChange = (e) => {
        setEmail(e.target.value);
      };
      const onPasswordChange = (e) => {
        setPassword(e.target.value);
      };


      function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
      function isValidPassword(password) {
        // تحقق أن كلمة السر تحتوي على 8 أحرف على الأقل، وتحتوي على أحرف كبيرة وصغيرة وأرقام وأحرف خاصة
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
      }
      const validationValues = () => {
        // || !isValidName(name)
        if (email === "" || !isValidEmail(email)) {
          notify("من فضلك ادخل بريد إلكتروني صحيح", "error");
          return;
        }
        if (password === "" || !isValidPassword(password)) {
          notify(
            "من فضلك ادخل كلمة سر صحيحة (على الأقل 8 أحرف، وتحتوي على أحرف كبيرة وصغيرة وأرقام وأحرف خاصة)",
            "error"
          );
          return;
        }
       
      };
      const res = useSelector((state) => state.auth.loginUser);

      const OnSubmit = async() => {
         validationValues()
         setIsPress(true)
         setLoading(true)
         await dispatch(loginUser(
            {
                email,
                password
           }
         ))
         setLoading(false)
         setIsPress(false)

      }
      const navigate = useNavigate()

      useEffect(()=>{
        if(loading === false) {
            if(res){
                console.log(res)
                if(res.data.token)
                {
                    localStorage.setItem("token" , res.data.token)
                    localStorage.setItem("user" ,JSON.stringify(res.data.data))
                    console.log(res.data.token)
                    notify("تمت عملية تسجيل الدخول بنجاح","success")
                    setEmail("")
                    setPassword("")
                    setTimeout(() => {
                       window.location.href="/"
                    }, 1500);
                }else{
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")

                }
                  if (res.data.message === "Incorrect email or password"){
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    notify("كلمة السر او الايميل خطأ", "error")
                  }
                

                setLoading(true)

            }
        }
      },[loading])
      return [email , password , loading , onEmailChange , onPasswordChange , OnSubmit , isPress]
}

export default LoginHook
