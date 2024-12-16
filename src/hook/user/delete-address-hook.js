import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOneAddress } from '../../Redux/Actions/addressAction'
import notify from '../useNotification'

const DeleteAddressHook = (id) => {
   const [show , setShow] = useState(false)
   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)
   const [loading , setLoading] = useState(true)
   //deletedAddress
   const res = useSelector((state)=>state.address.deletedAddress)
   const dispatch = useDispatch()

   const handelDelete = async() => {
    await dispatch(deleteOneAddress(id))
    setShow(false);
    setTimeout(() => {
        window.location.reload(false);

    }, 10);
   }
 

   return [ show , handleClose , handleShow , handelDelete ]
}

export default DeleteAddressHook
