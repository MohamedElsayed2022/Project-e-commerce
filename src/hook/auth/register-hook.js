import React, { useEffect, useState } from "react";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../Redux/Actions/authAction";
import { useNavigate } from "react-router-dom";

const RegisterHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.auth.user);
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  function isValidName(name) {
    const regex = /^[a-zA-Z0-9]{3,15}$/;
    return regex.test(name);
  }
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
    if (name === "" || !isValidName(name)) {
        return;
    }
    if (email === "" || !isValidEmail(email)) {
        notify("من فضلك ادخل بريد إلكتروني صحيح", "error");
        return;
    }
    if (phone === "" || phone.length < 10 || phone.length > 15) {
        notify("من فضلك اخل رقم الهاتف  (من 10 الى 15 رقما)", "error");
        return;
    }
    if (password === "" || !isValidPassword(password)) {
        notify("من فضلك ادخل كلمة سر صحيحة (على الأقل 8 أحرف، وتحتوي على أحرف كبيرة وصغيرة وأرقام وأحرف خاصة)", "error");
        return;
    }
    if (password !== confirmPassword) {
        notify("كلمة المرور غير متطابقة", "error");
        return;
    }
};


  const OnSubmit = async () => {
    validationValues();
    setLoading(true);
    await dispatch(
      createNewUser({
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
        phone,
      })
    );
    setLoading(false);
  };
   const navigate = useNavigate()
     useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
      if (res.data.token) {
        console.log(res.data.token)
        localStorage.setItem("token", res.data.token);
        notify(" تم التسجيل بنجاح", "success");
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          navigate("/login")
        }, 2000);
   
      }
      if (res.data.errors) {
        if (res.data.errors[0].msg === "E-mail already in use")
            notify("هذا الايميل مسجل من قبل", "error")
      }
      if (res.data.errors) {
        if (res.data.errors[0].msg === "Password confirmation is incorrect")
            notify("كلمة السر غير متطابقة", "error")
      }
      if (res.data.errors) {
        if (res.data.errors[0].msg === "accept only egypt phone numbers")
            notify("رقم التليفون يجب ان يكون مصرى فقط", "error")
      }
      if (res.data.errors) {
        if (res.data.errors[0].msg === "must be at least 3 chars")
            notify("يجب ادخال اسم اكثر من 3 احرف", "error")
      }
    }
    }
  }, [loading]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onNameChange,
    onEmailChange,
    onPhoneChange,
    onPasswordChange,
    onConfirmPasswordChange,
    OnSubmit,
  ];
};

export default RegisterHook;
