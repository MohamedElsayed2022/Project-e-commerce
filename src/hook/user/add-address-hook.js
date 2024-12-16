import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAddress } from "../../Redux/Actions/addressAction";
import notify from "../useNotification";
import { useNavigate } from "react-router-dom";

const AddAddressHook = () => {
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate()
   const res = useSelector((state)=>state.address.addAddress)
  const onChangeAlias = (e)=>{
    e.persist()

    setAlias(e.target.value)
    console.log(e.target.value)
  }
  const onChangeDetails= (e)=>{
    e.persist()

    setDetails(e.target.value)
  }
  const onChangePhone = (e)=>{
    e.persist()

    setPhone(e.target.value)
  }



  const onSubmit = async(e)=>{
    e.persist()
    if (alias === "" || details === "" || phone === "") {
        notify("من فضلك اكمل البيانات", "warn")
        return
    }
    console.log("Hello")
    setLoading(true)
    await dispatch(createAddress({
        alias,
        details,
        phone,
        city : '',
        postalCode :''
    }))
    setLoading(false)
  }
  useEffect(()=>{
    if(loading === false){
        if (res && res.status === 200) {
            notify("تمت اضافة العنوان بنجاح", "success")
            setTimeout(() => {
                navigate('/user/addresses')
            }, 1000);


        } else {
            notify("هناك مشكله فى عملية الاضافة ", "error")
        }
    }
  },[loading])

  return [onChangeAlias , onChangeDetails ,onChangePhone  ,alias ,details, phone, onSubmit  ]
};

export default AddAddressHook;
