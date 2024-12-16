import { useEffect, useState } from 'react'
import { createSubCategory } from "../../Redux/Actions/subcategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/categoryAction";
import notify from "../../hook/useNotification";
const AddSubCategoryHook = () => {
    const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const category = useSelector((state) => state.allcategory.category);
  const subcategory = useSelector((state) => state.subcategory.subcategory);
  console.log(subcategory)

  useEffect(() => {
    if(!navigator.onLine){
        notify(" هناك مشكلة فى الاتصال ب الانترنت", "warn");
        return
    }
    dispatch(getAllCategory());
  }, []);
  if (category) console.log(category.data);
  const handleChange = (e) => {
    setId(e.target.value);
  };

  ///onchane Name
  const onChangeName = (e)=>{
    e.persist()
    setName(e.target.value)
  }

  //handle Submit
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    if(!navigator.onLine){
        notify(" هناك مشكلة فى الاتصال ب الانترنت", "warn");
        return
    }
    if (!name) {
      notify("من فضلك  ادخل اسم التصنيف", "warn");

      return
    }
    if (id === "0") {
      notify("من فضلك  اختار تصنيف رئيسي", "warn");
      return

    }
    setLoading(true)
    await dispatch(createSubCategory({
      name ,
      category : id
    }))
    setLoading(false)
    setName(""); // إعادة تعيين الاسم
    setId("0"); // إعادة تعيين الرقم التعريفي
 
  };
  useEffect(()=>{
    if(loading === false)
    {
       
      if(subcategory.status === 201){
        notify("تمت الإضافة بنجاح", "success");
        setName(""); // إعادة تعيين الاسم
        setId("0"); // إعادة تعيين الرقم التعريفي
        setLoading(true)

      }else if(subcategory === "Error Error: Request failed with status 400"){
        notify("    هذا الاسم مكرر من فضلك اختار اسم اخر", "warn");

      }
      else{
        notify("هناك مشكلة فى عملية الاضافة", "warn");

      }
      console.log(subcategory.status)
     

    }
  },[loading])
  return [ onChangeName, handleChange , category , handleSubmit ]
}

export default AddSubCategoryHook
