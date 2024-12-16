import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsByCategory } from "../../Redux/Actions/productsAction"

const ViewAllProductsCategoryHook = (catID) => {
    const dispatch = useDispatch();
    const limit = 6;
  
    const getProduct = async () => {
      await dispatch(
        getAllProductsByCategory(limit , '' , catID)
      );
    };
  
    const onPress = async (page) => {
   
      await dispatch(
        getAllProductsByCategory(limit , page , catID)
      );
    }; 
    useEffect(() => {
      getProduct();
    }, []); // Only run once on component mount
  
    const allProducts = useSelector((state) => state.allproducts?.productsByCategory);
  
    const items = allProducts?.data || [];
    const pagination = allProducts?.paginationResult?.numberOfPages || [];
    const results = allProducts?.results || 0;
  
  return [items , pagination , onPress]
    
}

export default ViewAllProductsCategoryHook
