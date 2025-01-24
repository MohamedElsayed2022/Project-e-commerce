import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/categoryAction";
import { getAllBrand } from "../../Redux/Actions/brandAction";
import { getOneCategory } from "../../Redux/Actions/subcategoryAction";
import {
  createProduct,
  getAllProducts,
} from "../../Redux/Actions/productsAction";
import notify from "../../hook/useNotification";
import { useEffect, useState } from "react";

const AdminAddProductHook = () => {
  const [images, setImages] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحة");
  const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
  const [CatID, setCatID] = useState("");
  const [BrandID, setBrandID] = useState("");
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const category = useSelector((state) => state.allcategory.category);
  const brand = useSelector((state) => state?.allbrand?.brands);
  const subcategory = useSelector((state) => state.subcategory.subcategory);
  const product = useSelector((state) => state.allproducts.products);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllBrand())
    dispatch(getAllCategory());
  }, []);

  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onSelectCategory = async (e) => {
    if (e.target.value != 0) {
      await dispatch(getOneCategory(e.target.value));
    }

    setCatID(e.target.value);
  };
  useEffect(() => {
    if (CatID != 0) {
      if (subcategory.data) {
        setOptions(subcategory.data);
      }
    }
  }, [CatID]);
  const onSelectedBrand = (e) => {
    setBrandID(e.target.value);
  };
  //choose box of colors of products
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  ///remove color from list
  const removeColor = (color) => {
    const newColors = colors.filter((e) => e !== color);
    setColors(newColors);
  };


  
  //  //to convert base 64 to file
  //  const dataURLtoFile = (dataurl, filename) => {
  //   const arr = dataurl.split(',')
  //   const mime = arr[0].match(/:(.*?);/)[1]
  //   const bstr = atob(arr[1])
  //   let n = bstr.length
  //   const u8arr = new Uint8Array(n)
  //   while (n) {
  //     u8arr[n - 1] = bstr.charCodeAt(n - 1)
  //     n -= 1 // to make eslint happy
  //   }
  //   return new File([u8arr], filename, { type: mime })
  // }


  const dataURLtoFile = (dataurl, filename) => {
    try {
      const arr = dataurl.split(',');
      if (arr.length < 2) {
        console.error("Invalid data URL: Missing comma delimiter");
        throw new Error("Invalid data URL format");
      }
  
      const mimeMatch = arr[0].match(/:(.*?);/);
      if (!mimeMatch || mimeMatch.length < 2) {
        console.error("Invalid MIME type: ", arr[0]);
        throw new Error("Invalid MIME type format");
      }
  
      const mime = mimeMatch[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
  
      while (n) {
        u8arr[n - 1] = bstr.charCodeAt(n - 1);
        n -= 1;
      }
  
      return new File([u8arr], filename, { type: mime });
    } catch (error) {
      console.error("Error converting data URL to file:", error);
      return null;
    }
  };
  
  

  //insert data with images
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      notify(" هناك مشكلة فى الاتصال ب الانترنت", "warn");
      return;
    }
    if(priceBefore <= priceAfter){
        console.log("لازما السعر بعد يكون اقل من السعر قبل")
        notify("السعر بعد الخصم يجب ان يكون اقل من السعر قبل الخصم", "warn");   
        return
    }
    if (
      CatID === 0 ||
      prodName === "" ||
      prodDescription === "" ||
      images.length <= 0 ||
      priceBefore <= 0
    ) {
      
      console.log("من فضلك املئ كل الحقول");
      notify("من فضلك قم بتعبئة جميع الحقول", "warn");
      return;
    }

    //convert image base 64 to file
    const imageCover = dataURLtoFile(images[0], Math.random() + ".png");
    //convert array of images base 64 to file
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => dataURLtoFile(images[index], Math.random() + ".png")
    );

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("price", priceBefore);
    formData.append("priceAfterDiscount", priceAfter);

    formData.append("category", CatID);
    formData.append("images", images);
    formData.append("quantity", qty);
    formData.append("brand", BrandID);
    formData.append("imageCover", imageCover);
    selectedSubID.map((item) => formData.append("subcategory", item._id));
    colors.map((color) => formData.append("availableColors", color));
    itemImages.map((item) => formData.append("images", item));
    console.log(images);
      setLoading(true);
      await dispatch(createProduct(formData));
      setLoading(false);

    // notify("تم اضافة المنتج بنجاح", "success");
  };
  useEffect(() => {
    if (loading === false) {
      setCatID(0);
      setColors([]);
      setImages([]);
      setProdName("");
      setProdDescription("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setBrandID(0);
      setCatID(0);
      setSelectedSubID(0);
      setTimeout(() => setLoading(true), 1500);

      if (product) {
        if (product.status === 201) {
          notify("تم اضافة المنتج بنجاح", "success");
          setTimeout(() => {
            window.location.reload(false)
          }, 1000);
        } else {
          notify("هناك مشكله", "error");
        }
      }
    }
  }, [loading]);

  const onChaneName = (e) => {
    setProdName(e.target.value);
  };
  const onChangDescription = (e) => {
    setProdDescription(e.target.value);
  };
  const onChangePriceBe = (e) => {
    setPriceBefore(e.target.value);
  };
  const onChaneQuantity = (e) => {
    setQty(e.target.value);
  };
  const onChangePriceAf = (e) => {
    setPriceAfter(e.target.value)
  }
  return [
    images,
    setImages,
    prodName,
    onChaneName,
    prodDescription,
    onChangDescription,
    priceBefore,
    onChangePriceBe,
    onChangePriceAf,
    qty,
    onChaneQuantity,
    priceAfter,
    onSelectCategory,
    category,
    options,
    onSelect,
    onRemove,
    onSelectedBrand,
    brand,
    colors,
    removeColor,
    setShowColor,
    showColor,
    handleChangeComplete,
    handleSubmit
  ];
};

export default AdminAddProductHook;
