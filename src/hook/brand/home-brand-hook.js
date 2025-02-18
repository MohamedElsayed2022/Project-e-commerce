import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllBrand } from "../../Redux/Actions/brandAction";
const HomeBrandHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);
  const brands = useSelector((state) => state.allbrand.brands);
  const loading = useSelector((state) => state.allbrand.loading);
   let brand
  if(brands)
    brand = brands.data
  

  return [  brand , loading ]

}

export default HomeBrandHook
