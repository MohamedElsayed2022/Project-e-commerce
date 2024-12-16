import  { useEffect } from "react";
import avater from "../../images/avatar.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../Redux/Actions/categoryAction";
import notify from "../../hook/useNotification";

const AddCategoryHook = () => {
  const [img, setImg] = useState(avater);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const res = useSelector(state => state.allcategory.category)

  const dispatch = useDispatch();
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        console.log(event.target.files[0])
        setImg(URL.createObjectURL(event.target.files[0]))
        setSelectedFile(event.target.files[0])
    }
}
  // This curly brace ends the function

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || selectedFile === null) {
        console.log('من فضلك اكمل البيانات')
        notify('من فضلك اكمل البيانات', "warn");
        return;
    }
    const formData = new FormData();
        formData.append("name", name)
        formData.append("image", selectedFile)
        setLoading(true)
        setIsPress(true)
        await dispatch(createCategory(formData))
        setLoading(false)

        console.log(formData)
    }
    useEffect(() => {
      if (loading === false) {
          setImg(avater)
          setName("")
          setSelectedFile(null)
          console.log('تم الانتهاء')
          setLoading(true)
          setTimeout(() => setIsPress(false), 1000)
            if ( res.status === 201) {
              notify("تمت الاضافة بنجاح", "success");
            } else{ 
              notify("هناك مشكلة في عملية الإضافة", "warn");
            }
            
          
      }
  }, [loading])


  return [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName]

};

export default AddCategoryHook;
