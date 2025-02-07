import {useSelector , useDispatch} from 'react-redux'
import { getAllBrand, getAllBrandPage } from '../../Redux/Actions/brandAction';
import { useEffect } from 'react';
const AllBrandHook = () => {
  
    const dispatch = useDispatch();
    const brand = useSelector((state) => state.allbrand.brands );
    const loading = useSelector((state) => state.allbrand.loading);
    
    let pageCount = 0

      if(brand.paginationResult){
        pageCount = brand.paginationResult.numberOfPages
        
      }


    useEffect(() => {
      dispatch(getAllBrand(4));
    }, []);
  
    const getPage = async(page)=>{
      await dispatch(getAllBrandPage(page));
  
    }
    return [getPage , loading , pageCount  , brand ]
}

export default AllBrandHook
