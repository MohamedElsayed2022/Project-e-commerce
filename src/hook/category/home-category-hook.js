import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/categoryAction";

const HomeCategoryHook = () => {
  const colors = ["#FFD3E8", "#f4dba5", "#55cfdf", "#ff6262", "#0034ff", "#ffd3e8"];
  const dispatch = useDispatch();
  const category = useSelector((state) => state.allcategory.category);
  const loading = useSelector((state) => state.allcategory.loading);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]); // Include dispatch in the dependency array

  return [colors, category, loading];
}

export default HomeCategoryHook;
