import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productsAction";
import { useEffect } from "react";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allproducts.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]); 

  let items = [];

  if (allProducts?.results) {
    items = allProducts.results.slice(0, 4);
  }



  return [items];
};

export default ViewHomeProductsHook;




