import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/categoryAction';
import { getAllBrand } from '../../Redux/Actions/brandAction';
import ViewSearchProductsHook from '../product/view-search-products-hook';

const SidebarSearchHook = () => {
    const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook()
    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.allcategory.category);
    const allBrands = useSelector((state) => state.allbrand.brand);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        };
        fetchData();
    }, [dispatch]);

    const category = allCategories?.data || [];
    const brand = allBrands?.data || [];
    var queryBrand = ""
    var queryCat = ""

     const [catChecked , setCatChecked] = useState([])

    const clickCategory = (e) => {
        let value = e.target.value
        if(value === "0")
        {
            setCatChecked([])
        }else{
            if(e.target.checked === true){
                setCatChecked([...catChecked , value])
            }else if(e.target.checked === false){
                const newArray = catChecked.filter((e)=> e !== value)
                setCatChecked(newArray)
            }
            
        }
       


    };

    useEffect(()=>{
        queryCat = catChecked.map(val => "category[in][]=" + val).join("&")
        localStorage.setItem("catChecked", queryCat)
        setTimeout(() => {
            getProduct()
        }, 1000);
    },[catChecked])
    // const getQuery = ()=>{
       
    // }

    console.log(queryCat)

    const [brandChecked , setBrandChecked] = useState([])
    const clickBrand = (e) => {
        let value = e.target.value
        if(value === "0")
        {
            setBrandChecked([])
        }else{
            if(e.target.checked === true){
                setBrandChecked([...brandChecked , value])
            }else if(e.target.checked === false){
                const newArray = brandChecked.filter((e)=> e !== value)
                setBrandChecked(newArray)
            }
            
        }

    };

    useEffect(()=>{
        queryBrand = brandChecked.map(val => "brand[in][]=" + val).join("&")
        localStorage.setItem("brandChecked", queryBrand)
        setTimeout(() => {
            getProduct()
        }, 1000);
    },[brandChecked])

    const [From , setFrom ] = useState(0)
    const [To , setToFrom] = useState(0)
    const PriceFrom = (e)=>{
        localStorage.setItem("PriceFrom", e.target.value)
        setFrom(e.target.value)
    }
    const PriceTo = (e)=>{
        localStorage.setItem("PriceTo", e.target.value)
        setToFrom(e.target.value)
    }
    useEffect(()=>{
        setTimeout(() => {
            getProduct()
        }, 1000);
    },[From , To])
   
   


    return [category , brand , clickCategory , clickBrand , PriceFrom , PriceTo];
};

export default SidebarSearchHook;
