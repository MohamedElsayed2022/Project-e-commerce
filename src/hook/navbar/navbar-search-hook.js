import React, { useEffect, useState } from 'react'
import ViewSearchProductsHook from '../product/view-search-products-hook'
import { useNavigate } from 'react-router-dom'

const NavbarSearchHook = () => {
    const [items , pagination , onPress , getProduct , results] = ViewSearchProductsHook()
    const [searchWord , setSearchWord] = useState('')
    const navigate = useNavigate()
    const OnChangeSearch = (e)=>{
        localStorage.setItem("searchWord" ,e.target.value )
        console.log(e.target.value)
        setSearchWord(e.target.value)
        navigate("/products")
        
        // const path = window.location.pathname
        // if(path != "/products"){
        //     window.location.href = "/products"
        // }


    }
    useEffect(()=>{
         setTimeout(() => {
             getProduct()
         }, 1000);
    },[searchWord])
    return [ OnChangeSearch , searchWord ]
  
}

export default NavbarSearchHook
