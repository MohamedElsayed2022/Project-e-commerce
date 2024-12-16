import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsByBrand, getAllProductsByCategory } from "../../Redux/Actions/productsAction"

const ViewAllProductsBrandHook = (brandID) => {
    const dispatch = useDispatch();
    const limit = 8;
  
    const getProduct = async () => {
      await dispatch(
        getAllProductsByBrand(limit , '' , brandID)
      );
    };
  
    const onPress = async (page) => {
   
      await dispatch(
        getAllProductsByBrand(limit , page , brandID)
      );
    }; 
    useEffect(() => {
      getProduct();
    }, []); // Only run once on component mount
  
    const allProducts = useSelector((state) => state.allproducts?.productsByBrand);
  
    const items = allProducts?.data || [];
    const pagination = allProducts?.paginationResult?.numberOfPages || [];
    const results = allProducts?.results || 0;
  
  return [items , pagination , onPress]
    
}

export default ViewAllProductsBrandHook
