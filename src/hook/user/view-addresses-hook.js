import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAddresses } from '../../Redux/Actions/addressAction'

const ViewAddressesHook = () => {
    const dispatch = useDispatch()
    const res = useSelector((state)=>state.address.allAddresses)

    useEffect(()=>{
        const get = async ()=>{
            await dispatch(getAllAddresses())
        }
        get()
    },[])

    let Addresses = []
    if(res && res.data)
        Addresses = res.data
    
    return [Addresses]

}

export default ViewAddressesHook