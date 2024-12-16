import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneAddress, updateAddress } from '../../Redux/Actions/addressAction'
import { useNavigate } from 'react-router-dom';
import notify from '../useNotification';

const EditAddressHook = (id) => {
    const [alias, setAlias] = useState("");
    const [details, setDetails] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(true);
    const [loadingEdit, setLoadingEdit] = useState(true);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const res = useSelector((state)=>state.address.oneAddress)


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

     

    useEffect(()=>{
         const get = async ()=>{
            setLoading(true)
             await dispatch(getOneAddress(id))
             setLoading(false)
         }
         get()
    },[])
    useEffect(()=>{
        if(loading === false){
            if(res && res.status === "success"){
                setAlias(res.data.alias)
                setDetails(res.data.details)
                setPhone(res.data.phone)
              }
        }
           
    },[loading])
    const resEdit = useSelector((state)=>state.address.editedAddress)

    const handleEdit = async(e)=>{
        e.persist()
        setLoadingEdit(true)
        await dispatch(updateAddress(id,{
            alias,
            details,
            phone
        })) 
        setLoadingEdit(false)

    }

    useEffect(()=>{
        if (loadingEdit === false) {
            if (resEdit && resEdit.status === 200) {
                notify("تمت عملية التعديل بنجاح", "success")
                setTimeout(() => {
                    navigate('/user/addresses')
                }, 1000);
                setAlias('')
                setDetails('')
                setPhone('')
            } else {
                notify("فشل فى عملية التعديل", "error")
            }
        }
    },[loadingEdit])

    ///editedAddress
    

    return [onChangeAlias , onChangeDetails , onChangePhone , alias , details , phone , handleEdit]

}

export default EditAddressHook
