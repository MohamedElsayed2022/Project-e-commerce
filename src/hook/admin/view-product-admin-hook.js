import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage } from "../../Redux/Actions/productsAction";

const ViewProductAdminHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts(10));
    }, [dispatch]);

    const allProducts = useSelector((state) => state.allproducts.allProducts);

    const items = allProducts?.data || [];
    const pagination = allProducts?.paginationResult || [];

    // Get all products by page number
    const getPage = (page) => {
        dispatch(getAllProductsPage(page));
    };

    return [items, pagination, getPage];
}

export default ViewProductAdminHook;
