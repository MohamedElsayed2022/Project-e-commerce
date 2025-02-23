import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOneProduct, getProductLike } from "../../Redux/Actions/productsAction";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "../../Redux/Actions/categoryAction";
import { getOneBrand } from "../../Redux/Actions/brandAction";

const ViewProductsDetailsHook = (prodID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getOne = async()=>{
      await  dispatch(getOneProduct(prodID));
    }
    getOne()
  }, [prodID]);
  const oneProduct = useSelector((state) => state.allproducts.oneProduct);
  const oneCategory = useSelector((state) => state.allcategory.oneCategory);
  const oneBrand = useSelector((state) => state.allbrand.oneBrand);
  const productLike = useSelector((state) => state.allproducts.productsLike);
  
  let item = [];
  if (oneProduct.data) {
    item = oneProduct.data;
  } else {
    item = [];
  }
  useEffect(() => {
    if (item.category) 
        dispatch(getOneCategory(item.category));
    if(item.brand){
        dispatch(getOneBrand(item.brand))
    }
    if (item.category) 
      dispatch(getProductLike(item.category));
        
  }, [item]);
  //to show images of array
  let images = [];
  if (item.images)
    images = item.images.map((img) => {
      return { original: img };
    });
  else {
    images = [{ original: `${mobile}` }];
  }

  //to show category item
  let cat = [];
  if (oneCategory.data)
    cat = oneCategory.data
  else 
    cat = [];

     //to show brand item

  let brand = [];
  if (oneBrand.data)
    brand = oneBrand.data
  else 
  brand = [];


  let prod = []
  if(productLike)
    prod = productLike.data
  else
    prod = []


    const items = Array.isArray(prod) ? prod.slice(0, 4) : []

  return [item, images, cat , brand , items  ];
};

export default ViewProductsDetailsHook;
