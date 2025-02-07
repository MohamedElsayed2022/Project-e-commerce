import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsPage,
  getAllProductsSearch,
} from "../../Redux/Actions/productsAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();
  const limit = 8;

  const getProduct = async () => {
     getStorge()
    sortData();
    await dispatch(
      getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${brandCat}${priceToString}${pricefromString}`)
    );
  };

  useEffect(() => {
    getProduct();
  }, []); // Only run once on component mount

  const allProducts = useSelector((state) => state.allproducts?.allProducts);

  const items = allProducts?.data || [];
  const pagination = allProducts?.paginationResult?.numberOfPages || [];
  const results = allProducts?.results || 0;
  const onPress = async (page) => {
   
    getStorge()
    sortData()
    await dispatch(
      getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${priceToString}${pricefromString}`)
    );
  }; 
  let word = "", queryCat= "", brandCat = "", priceFrom = "", priceTo = "",
  pricefromString = "" , priceToString = "";
  const getStorge = ()=>{
    
    if(localStorage.getItem("searchWord") != ""){
      word = localStorage.getItem("searchWord")
    }
    if(localStorage.getItem("catChecked") != ""){
      queryCat = localStorage.getItem("catChecked")
    }
    if(localStorage.getItem("brandChecked") != ""){
      brandCat = localStorage.getItem("brandChecked")
    }
    if(localStorage.getItem("PriceFrom") != ""){
      priceFrom = localStorage.getItem("PriceFrom")
    }
    if(localStorage.getItem("PriceTo") != ""){
      priceTo = localStorage.getItem("PriceTo")
    }
    if(priceFrom === "" || priceFrom <= 0){
      pricefromString = ""
    }else{
      pricefromString = `&price[gte]=${priceFrom}`
    }

    if(priceTo === "" || priceTo <= 0){
      priceToString = ""
    }else{
      priceToString = `&price[lte]=${priceTo}`
    }

  }
  //sort data
  let sortType = "",
    sort;
  const sortData = async () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    switch (sortType) {
      case (sortType = "السعر من الاعلى الى الاقل"):
        sort = "-price";
        break;
      case (sortType = "السعر من الاقل الى الاعلى"):
        sort = "+price";
        break;
        case (sortType = "بدون ترتيب"):
        sort = "";
        break;
        case (sortType = "الاكثر تقييما"):
            sort = "-quantity";
            break;
            case (sortType = "الاكثر مبيعا"):
            sort = "+quantity";
            break;
      default:
        sort = "";
        break;
    }
  };

  return [items, pagination, onPress, getProduct, results];
};

export default ViewSearchProductsHook;
