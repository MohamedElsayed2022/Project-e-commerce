import React, { useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { getAllCategory, getAllCategoryPage } from '../../Redux/Actions/categoryAction'
const AllCategoryPageHook = () => {
  
    const dispatch = useDispatch();
    const category = useSelector((state) => state.allcategory.category);
    const loading = useSelector((state) => state.allcategory.loading);
    let pageCount = 0
      
      if(category)
        pageCount = category?.paginationResult?.numberOfPages

    useEffect(() => {
      dispatch(getAllCategory(6));
    }, []);
  
    const getPage = (page)=>{
      dispatch(getAllCategoryPage(page));
  
    }
    return [getPage , loading , pageCount  , category ]
}

export default AllCategoryPageHook
