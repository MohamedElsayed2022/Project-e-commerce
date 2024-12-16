import  { useEffect } from "react";
import avater from "../../images/avatar.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCategory } from "../../Redux/Actions/categoryAction";
import notify from "../../hook/useNotification";
import { createBrand } from "../../Redux/Actions/brandAction";

const AddBrandHook = () => {
  const [img, setImg] = useState(avater);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const res = useSelector((state) => state.allbrand.brand);

  const dispatch = useDispatch();
  const onChangName = (event) => {
    event.persist();
    setName(event.target.value);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };
  // This curly brace ends the function

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || selectedFile === null) {
      console.log("من فضلك اكمل البيانات !");
      notify("من فضلك اكمل البيانات", "warn");

      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(createBrand(formData));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setImg(avater);
      setName("");
      setSelectedFile(null);
      console.log("تم الانتهاء");
      setLoading(true);
      setTimeout(() => {
        setIsPress(false);
      }, 3000);
      if (res.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else {
        notify("  هناك مشكلة فى عملية الاضافة", "warn");
      }
    }
  }, [loading]);

  return [
    img,
    name,
    selectedFile,
    loading,
    onImageChange,
    isPress,
    handleSubmit,
    onChangName,
  ];
};

export default AddBrandHook;
