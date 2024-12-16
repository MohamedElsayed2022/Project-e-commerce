// const item = useSelector((state) => state.allproducts.oneProduct);
// //get last catgeory state from redux
// const category = useSelector((state) => state.allcategory.category)
// useEffect(()=>{
//       console.log("category" , category)
// },[])
// //get last brand state from redux
// const brand = useSelector((state) => state.allbrand.brand)

// //get last sub cat state from redux
// const subCat = useSelector((state) => state.subcategory.subcategory);





import React, { useState, useEffect } from 'react'
// import { getOneCategory } from '../../redux/actions/subcategoryAction';
// import { createProduct, getOneProduct } from '../../redux/actions/productsAction';
// import notify from './../../hook/useNotifaction';
import { useSelector, useDispatch } from 'react-redux'
// import { getAllCategory } from '../../redux/actions/categoryAction'
// import { getAllBrand } from './../../redux/actions/brandAction';
// import { updateProducts } from './../../redux/actions/productsAction';
import baseUrl from '../../Api/baseUrl';
import { getOneProduct, updateProducts } from '../../Redux/Actions/productsAction';
import { getAllCategory } from '../../Redux/Actions/categoryAction';
import { getAllBrand } from '../../Redux/Actions/brandAction';
import { getOneCategory } from '../../Redux/Actions/subcategoryAction';
import notify from '../useNotification';

const AdminEditProductsHook = (id) => {

    const dispatch = useDispatch();
    useEffect(() => {
        const run = async () => {
            await dispatch(getOneProduct(id))
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        run();
    }, [])

    //get one product details
    const item = useSelector((state) => state.allproducts.oneProduct)
    //get last catgeory state from redux
    const category = useSelector((state) => state.allcategory.category)
    //get last brand state from redux
    const brand = useSelector((state) => state.allbrand.brand)

    //get last sub cat state from redux
    const subCat = useSelector((state) => state.subcategory.subcategory)

    const onSelect = (selectedList) => {
        setSeletedSubID(selectedList)
    }
    const onRemove = (selectedList) => {
        setSeletedSubID(selectedList)
    }

    const [options, setOptions] = useState([]);

    //values images products
    const [images, setImages] = useState([]);
    //values state
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAftr, setPriceAftr] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [CatID, setCatID] = useState('0');
    const [BrandID, SetBrandID] = useState('0');
    const [subCatID, setSubCatID] = useState([]);
    const [seletedSubID, setSeletedSubID] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (item.data) {
            console.log(item.data.images)
            setImages(item.data.images)
            setProdName(item.data.title)
            setProdDescription(item.data.description)
            setPriceBefore(item.data.price)
            setQty(item.data.quantity)
            setCatID(item.data.category)
            SetBrandID(item.data.brand)
            setColors(item.data.availableColors)
        }
    }, [item])


    //to change name state
    const onChangeProdName = (event) => {
        event.persist();
        setProdName(event.target.value)
    }
    //to change name state
    const onChangeDesName = (event) => {
        event.persist();
        setProdDescription(event.target.value)
    }
    //to change name state
    const onChangePriceBefor = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }
    //to change name state
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAftr(event.target.value)
    }  //to change name state
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value)
    }
    const onChangeColor = (event) => {
        event.persist();
        setShowColor(!showColor)
    }

    //to show hide color picker
    const [showColor, setShowColor] = useState(false);
    //to store all pick color
    const [colors, setColors] = useState([]);
    //when choose new color
    const handelChangeComplete = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor)
    }
    const removeColor = (color) => {
        const newColor = colors.filter((e) => e !== color)
        setColors(newColor)
    }



    //when selet category store id
    const onSeletCategory = async (e) => {
        setCatID(e.target.value)
    }
    useEffect(() => {
        if (CatID != 0) {
            const run = async () => {
                await dispatch(getOneCategory(CatID))
            }
            run();
        }
    }, [CatID])

    useEffect(() => {
        if (subCat) {
            setOptions(subCat.data)
        }
    }, [subCat])




    //when selet brand store id
    const onSeletBrand = (e) => {
        SetBrandID(e.target.value)
    }

    //to convert base 64 to file
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    //convert url to file
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };

    //to save data 
    const handelSubmit = async (e) => {
        console.log("Kreep")
        e.preventDefault();
        if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
            notify("من فضلك اكمل البيانات", "warn")
            return;
        }
        console.log(images[0])
        let imgCover;
        if (images[0].length <= 1000) {
            convertURLtoFile(images[0]).then(val => imgCover = val)
        } else {
            imgCover = dataURLtoFile(images[0], Math.random() + ".png")
        }

        let itemImages = []
        //convert array of base 64 image to file 
        Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                if (images[index].length <= 1000) {
                    convertURLtoFile(images[index]).then(val => itemImages.push(val))
                }
                else {
                    itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
                }
            })


        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore);

        formData.append("category", CatID);
        formData.append("brand", BrandID);

        setTimeout(() => {
            formData.append("imageCover", imgCover);
            itemImages.map((item) => formData.append("images", item))
        }, 1000);

        setTimeout(() => {
            console.log(imgCover)
            console.log(itemImages)
        }, 1000);

        colors.map((color) => formData.append("availableColors", color))
        seletedSubID.map((item) => formData.append("subcategory", item._id))
        setTimeout(async () => {
            setLoading(true)
              await dispatch(updateProducts(id, formData))
             setLoading(false)
        }, 1000);

        console.log(formData)
        console.log("Hello world")

    }

    //get create meesage
    const product = useSelector(state => state.allproducts.updateProducts)

    useEffect(() => {

        if (loading === false) {
            setCatID(0)
            setColors([])
            setImages([])
            setProdName('')
            setProdDescription('')
            setPriceBefore('السعر قبل الخصم')
            setPriceAftr('السعر بعد الخصم')
            setQty('الكمية المتاحة')
            SetBrandID(0)
            setSeletedSubID([])
            setTimeout(() => setLoading(true), 1500)

            if (product) {
                if (product.status === 200) {
                    notify("تم التعديل بنجاح", "success")
                } else {
                    notify("هناك مشكله", "error")
                }
            }
        }
    }, [loading])


    return [CatID, BrandID, onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName]

}

export default AdminEditProductsHook
































// import { useDispatch, useSelector } from "react-redux";
// import { getAllCategory } from "../../Redux/Actions/categoryAction";
// import { getAllBrand } from "../../Redux/Actions/brandAction";
// import { getOneCategory } from "../../Redux/Actions/subcategoryAction";
// import {
//   createProduct,
//   getAllProducts,
//   getOneProduct,
//   updateProducts,
// } from "../../Redux/Actions/productsAction";
// import notify from "../../hook/useNotification";
// import { useEffect, useState } from "react";

// const AdminEditProductHook = (id) => {
//   const [images, setImages] = useState([]);
//   const [prodName, setProdName] = useState("");
//   const [prodDescription, setProdDescription] = useState("");
//   const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
//   const [qty, setQty] = useState("الكمية المتاحة");
//   const [priceBefore, setPriceBefore] = useState("السعر قبل الخصم");
//   const [CatID, setCatID] = useState("0");
//   const [BrandID, setBrandID] = useState("0");
//   const [selectedSubID, setSelectedSubID] = useState([]);
//   const [showColor, setShowColor] = useState(false);
//   const [colors, setColors] = useState([]);
//   const [options, setOptions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const dispatch = useDispatch();
//   const category = useSelector((state) => state.allcategory.category);
//   const brand = useSelector((state) => state.allbrand.brand);
//   const subcategory = useSelector((state) => state.subcategory.subcategory);
//   const product = useSelector((state) => state.allproducts.products);
//   const item = useSelector((state) => state.allproducts.oneProduct);

//   useEffect(() => {
//     // if(product)
//         const run = async ()=>{
//            await dispatch(getOneProduct(id));
//            await dispatch(getAllProducts());
//            await dispatch(getAllBrand())
//            await dispatch(getAllCategory())

//         }
//         run()
   

//   }, []);

//   useEffect(()=>{
//       if(item.data)
//         {
//             setImages(item.data.images)
//             setProdName(item.data.title)
//             setProdDescription(item.data.description)
//             // setPriceAfter(item.data.price)
//             setPriceBefore(item.data.price)
//             setQty(item.data.quantity)
//             setCatID(item.data.category)
//             setBrandID(item.data.brand)
//             setSelectedSubID(item.data.subCategoryID)
//             setColors(item.data.availableColors)
//             setOptions(item.data.subCategoryID)
            
//         }
//   },[item])
 

//   // if (category) console.log(category.data);

//   useEffect(() => {
//     dispatch(getAllCategory());
//     // dispatch(getAllBrand());
//   }, []);
//   useEffect(() => {
//     dispatch(getAllBrand());
//   }, []);
//   const onSelect = (selectedList) => {
//     setSelectedSubID(selectedList);
//   };
//   const onRemove = (selectedList) => {
//     setSelectedSubID(selectedList);
//   };
//   const onSelectCategory = async (e) => {
//     setCatID(e.target.value);
//   };
//   useEffect(() => {
//     if (CatID != 0) {
//         const run = async () => {
//             await dispatch(getOneCategory(CatID))
//         }
//         run();
//     }
// }, [CatID])

// useEffect(() => {
//     if (subcategory) {
//         setOptions(subcategory.data)
//     }
// }, [subcategory])
//   //subcategory
//   const onSelectedBrand = (e) => {
//     setBrandID(e.target.value);
//   };
//   //choose box of colors of products
//   const handleChangeComplete = (color) => {
//     setColors([...colors, color.hex]);
//     setShowColor(!showColor);
//   };
//   ///remove color from list
//   const removeColor = (color) => {
//     const newColors = colors.filter((e) => e !== color);
//     setColors(newColors);
//   };

//     //to convert base 64 to file
//     function dataURLtoFile(dataurl, filename) {
//       var arr = dataurl.split(','),
//           mime = arr[0].match(/:(.*?);/)[1],
//           bstr = atob(arr[1]),
//           n = bstr.length,
//           u8arr = new Uint8Array(n);

//       while (n--) {
//           u8arr[n] = bstr.charCodeAt(n);
//       }

//       return new File([u8arr], filename, { type: mime });
//   }


//     //convert url to file
//     const convertURLtoFile = async (url) => {
//       const response = await fetch(url, { mode: "cors" });
//       const data = await response.blob();
//       const ext = url.split(".").pop();
//       const filename = url.split("/").pop();
//       const metadata = { type: `image/${ext}` };
//       return new File([data], Math.random(), metadata);
//   };
//   //insert data with images
//   // const handleSubmit = async (e) => {
//   //   alert("Hello World !")
//   //   e.preventDefault();
//   //   if (!navigator.onLine) {
//   //     notify(" هناك مشكلة فى الاتصال ب الانترنت", "warn");
//   //     return;
//   //   }
//   //   if(priceBefore <= priceAfter){
//   //       console.log("لازما السعر بعد يكون اقل من السعر قبل")
//   //       notify("السعر بعد الخصم يجب ان يكون اقل من السعر قبل الخصم", "warn");   
//   //       return
//   //   }
  
//   //   if (
//   //     CatID === 0 ||
//   //     prodName === "" ||
//   //     prodDescription === "" ||
//   //     images.length <= 0 ||
//   //     priceBefore <= 0
//   //   ) {
      
//   //     console.log("من فضلك املئ كل الحقول");
//   //     notify("من فضلك قم بتعبئة جميع الحقول", "warn");
//   //     return;
//   //   }
     
//   //   let imageCover
//   //   if(images[0].length <= 1000){
//   //     convertURLtoFile(images[0]).then((val)=>imageCover = val)
      

//   //   }else{
//   //     //convert image base 64 to file
//   //     imageCover = dataURLtoFile(images[0], Math.random() + ".png");

//   //   }

    
//   //   //convert array of images base 64 to file
//   //    let itemImages = []
//   //     Array.from(Array(Object.keys(images).length).keys()).map(
//   //     (item, index) =>{
//   //       if(images[index].length <= 1000){
//   //         convertURLtoFile(images[index]).then((val)=>images.push(val))

//   //       }else{
//   //         itemImages.push(dataURLtoFile(images[index] , Math.random() + ".png"))
//   //       }

//   //     } 
//   //   );

//   //   const formData = new FormData();
//   //   formData.append("title", prodName);
//   //   formData.append("description", prodDescription);
//   //   formData.append("price", priceBefore);
//   //   formData.append("category", CatID);
//   //   formData.append("images", images);
//   //   formData.append("quantity", qty);
//   //   formData.append("brand", BrandID);
//   //   setTimeout(() => {
//   //     formData.append("imageCover", images[0]);
//   //   }, 1000);
//   //   selectedSubID.map((item) => formData.append("subcategory", item._id));
//   //   colors.map((color) => formData.append("availableColors", color));
//   //   images.map((item) => formData.append("images", item));
//   //   console.log(images);
//   //   setTimeout(async () => {
//   //     setLoading(true);
//   //     await dispatch(updateProducts(id , formData));
//   //     setLoading(false);
//   //     notify("تم اضافة المنتج بنجاح", "success");
//   //   }, 1000);

//   //   notify("تم اضافة المنتج بنجاح", "success");

//   // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
//         notify("من فضلك اكمل البيانات", "warn")
//         return;
//     }
//     console.log(images[0])
//     let imgCover;
//     if (images[0].length <= 1000) {
//         convertURLtoFile(images[0]).then(val => imgCover = val)
//     } else {
//         imgCover = dataURLtoFile(images[0], Math.random() + ".png")
//     }

//     let itemImages = []
//     //convert array of base 64 image to file 
//     Array.from(Array(Object.keys(images).length).keys()).map(
//         (item, index) => {
//             if (images[index].length <= 1000) {
//                 convertURLtoFile(images[index]).then(val => itemImages.push(val))
//             }
//             else {
//                 itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
//             }
//         })


//     const formData = new FormData();
//     formData.append("title", prodName);
//     formData.append("description", prodDescription);
//     formData.append("quantity", qty);
//     formData.append("price", priceBefore);

//     formData.append("category", CatID);
//     formData.append("brand", BrandID);

//     setTimeout(() => {
//         formData.append("imageCover", imgCover);
//         itemImages.map((item) => formData.append("images", item))
//     }, 1000);

//     setTimeout(() => {
//         console.log(imgCover)
//         console.log(itemImages)
//     }, 1000);

//     colors.map((color) => formData.append("availableColors", color))
//     selectedSubID.map((item) => formData.append("subcategory", item._id))
//     setTimeout(async () => {
//         // setLoading(true)
//         //   await dispatch(updateProducts(id, formData))
//         //  setLoading(false)
//     }, 1000);

// }



//   useEffect(() => {
//     if (loading === false) {
//       setCatID(0);
//       setColors([]);
//       setImages([]);
//       setProdName('');
//       setProdDescription('');
//       setPriceBefore("السعر قبل الخصم");
//       setPriceAfter("السعر بعد الخصم");
//       setQty("الكمية المتاحة");
//       setBrandID(0);
//       // setCatID(0);
//       setSelectedSubID([]);
//       setTimeout(() => setLoading(true), 1500);

//       if (product) {
//         if (product.status === 201) {
//           notify("تم التعديل بنجاح", "success");
//         } else {
//           notify("هناك مشكله", "error");
//         }
//       }
//     }
//   }, [loading]);

//   const onChaneName = (e) => {
//     setProdName(e.target.value);
//   };
//   const onChangDescription = (e) => {
//     setProdDescription(e.target.value);
//   };
//   const onChangePriceBe = (e) => {
//     setPriceBefore(e.target.value);
//   };
//   const onChaneQuantity = (e) => {
//     setQty(e.target.value);
//   };
//   const onChangePriceAf = (e) => {
//     setPriceAfter(e.target.value)
//   }
//   return [
//     CatID,
//     BrandID,
//     images,
//     setImages,
//     prodName,
//     onChaneName,
//     prodDescription,
//     onChangDescription,
//     priceBefore,
//     onChangePriceBe,
//     onChangePriceAf,
//     qty,
//     onChaneQuantity,
//     priceAfter,
//     onSelectCategory,
//     category,
//     options,
//     onSelect,
//     onRemove,
//     onSelectedBrand,
//     brand,
//     colors,
//     removeColor,
//     setShowColor,
//     showColor,
//     handleChangeComplete,
//     handleSubmit
//   ];
// };

// export default AdminEditProductHook;







// const item = useSelector((state) => state.allproducts.oneProduct);
// //get last catgeory state from redux
// const category = useSelector((state) => state.allcategory.category)
// useEffect(()=>{
//       console.log("category" , category)
// },[])
// //get last brand state from redux
// const brand = useSelector((state) => state.allbrand.brand)

// //get last sub cat state from redux
// const subCat = useSelector((state) => state.subcategory.subcategory);






// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import notify from './../../hook/useNotification';
// // import { useSelector, useDispatch } from 'react-redux'
// // import { getAllCategory } from '../../redux/actions/categoryAction'
// import { getOneProduct, updateProducts } from '../../Redux/Actions/productsAction';
// import { getAllCategory, getOneCategory } from '../../Redux/Actions/categoryAction';
// import { getAllBrand } from '../../Redux/Actions/brandAction';
// // import { updateProducts } from './../../redux/actions/productsAction';
// // import baseUrl from '../../Api/baseUrl';




// const AdminEditProductsHook = (id) => {

//     const dispatch = useDispatch();
//     useEffect(() => {
//         const run = async () => {
//             await dispatch(getOneProduct(id))
//             await dispatch(getAllCategory());
//             await dispatch(getAllBrand());
//         }
//         run();
//     }, [])
     


//     //   const category = useSelector((state) => state.allcategory.category);
// //   const brand = useSelector((state) => state.allbrand.brand);
// //   const subcategory = useSelector((state) => state.subcategory.subcategory);
// //   const product = useSelector((state) => state.allproducts.products);
// //   const item = useSelector((state) => state.allproducts.oneProduct);
//     //get one product details
//     const item = useSelector((state) => state.allproducts.oneProduct);
//     //get last catgeory state from redux
//     const category = useSelector((state) => state.allcategory.category)
//     useEffect(()=>{
//           console.log("category" , category)
//     },[])
//     //get last brand state from redux
//     const brand = useSelector((state) => state.allbrand.brand)

//     //get last sub cat state from redux
//     const subCat = useSelector((state) => state.subcategory.subcategory);

//     const onSelect = (selectedList) => {
//         setSeletedSubID(selectedList)
//     }
//     const onRemove = (selectedList) => {
//         setSeletedSubID(selectedList)
//     }

//     const [options, setOptions] = useState([]);

//     //values images products
//     const [images, setImages] = useState([]);
//     //values state
//     const [prodName, setProdName] = useState('');
//     const [prodDescription, setProdDescription] = useState('');
//     const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
//     const [priceAftr, setPriceAftr] = useState('السعر بعد الخصم');
//     const [qty, setQty] = useState('الكمية المتاحة');
//     const [CatID, setCatID] = useState('0');
//     const [BrandID, SetBrandID] = useState('0');
//     const [subCatID, setSubCatID] = useState([]);
//     const [seletedSubID, setSeletedSubID] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (item.data) {
//             console.log(item.data.images)
//             setImages(item.data.images)
//             setProdName(item.data.title)
//             setProdDescription(item.data.description)
//             setPriceBefore(item.data.price)
//             setQty(item.data.quantity)
//             setCatID(item.data.category)
//             SetBrandID(item.data.brand)
//             setColors(item.data.availableColors)
//         }
//     }, [item])


//     //to change name state
//     const onChangeProdName = (event) => {
//         event.persist();
//         setProdName(event.target.value)
//     }
//     //to change name state
//     const onChangeDesName = (event) => {
//         event.persist();
//         setProdDescription(event.target.value)
//     }
//     //to change name state
//     const onChangePriceBefor = (event) => {
//         event.persist();
//         setPriceBefore(event.target.value)
//     }
//     //to change name state
//     const onChangePriceAfter = (event) => {
//         event.persist();
//         setPriceAftr(event.target.value)
//     }  //to change name state
//     const onChangeQty = (event) => {
//         event.persist();
//         setQty(event.target.value)
//     }
//     const onChangeColor = (event) => {
//         event.persist();
//         setShowColor(!showColor)
//     }

//     //to show hide color picker
//     const [showColor, setShowColor] = useState(false);
//     //to store all pick color
//     const [colors, setColors] = useState([]);
//     //when choose new color
//     const handelChangeComplete = (color) => {
//         setColors([...colors, color.hex])
//         setShowColor(!showColor)
//     }
//     const removeColor = (color) => {
//         const newColor = colors.filter((e) => e !== color)
//         setColors(newColor)
//     }



//     //when selet category store id
//     const onSeletCategory = async (e) => {
//         setCatID(e.target.value)
//     }
//     useEffect(() => {
//         if (CatID != 0) {
//             const run = async () => {
//                 await dispatch(getOneCategory(CatID))
//             }
//             run();
//         }
//     }, [CatID])

//     useEffect(() => {
//         if (subCat) {
//             setOptions(subCat.data)
//         }
//     }, [subCat])




//     //when selet brand store id
//     const onSeletBrand = (e) => {
//         SetBrandID(e.target.value)
//     }

//     //to convert base 64 to file
//     function dataURLtoFile(dataurl, filename) {
//         var arr = dataurl.split(','),
//             mime = arr[0].match(/:(.*?);/)[1],
//             bstr = atob(arr[1]),
//             n = bstr.length,
//             u8arr = new Uint8Array(n);

//         while (n--) {
//             u8arr[n] = bstr.charCodeAt(n);
//         }

//         return new File([u8arr], filename, { type: mime });
//     }

//     //convert url to file
//     const convertURLtoFile = async (url) => {
//         const response = await fetch(url, { mode: "cors" });
//         const data = await response.blob();
//         const ext = url.split(".").pop();
//         const filename = url.split("/").pop();
//         const metadata = { type: `image/${ext}` };
//         return new File([data], Math.random(), metadata);
//     };

//     //to save data 
//     const handelSubmit = async (e) => {
//         e.preventDefault();
//         if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
//             notify("من فضلك اكمل البيانات", "warn")
//             return;
//         }
//         console.log(images[0])
//         let imgCover;
//         if (images[0].length <= 1000) {
//             convertURLtoFile(images[0]).then(val => imgCover = val)
//         } else {
//             imgCover = dataURLtoFile(images[0], Math.random() + ".png")
//         }

//         let itemImages = []
//         //convert array of base 64 image to file 
//         Array.from(Array(Object.keys(images).length).keys()).map(
//             (item, index) => {
//                 if (images[index].length <= 1000) {
//                     convertURLtoFile(images[index]).then(val => itemImages.push(val))
//                 }
//                 else {
//                     itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
//                 }
//             })


//         const formData = new FormData();
//         formData.append("title", prodName);
//         formData.append("description", prodDescription);
//         formData.append("quantity", qty);
//         formData.append("price", priceBefore);

//         formData.append("category", CatID);
//         formData.append("brand", BrandID);

//         setTimeout(() => {
//             formData.append("imageCover", imgCover);
//             itemImages.map((item) => formData.append("images", item))
//         }, 1000);

//         setTimeout(() => {
//             console.log(imgCover)
//             console.log(itemImages)
//         }, 1000);

//         colors.map((color) => formData.append("availableColors", color))
//         seletedSubID.map((item) => formData.append("subcategory", item._id))
//         setTimeout(async () => {
//             setLoading(true)
//               await dispatch(updateProducts(id, formData))
//              setLoading(false)
//         }, 1000);

//     }

//     //get create meesage
//     const product = useSelector(state => state.allproducts.updateProducts)

//     useEffect(() => {

//         if (loading === false) {
//             //setCatID(0)
//             setColors([])
//             setImages([])
//             setProdName('')
//             setProdDescription('')
//             setPriceBefore('السعر قبل الخصم')
//             setPriceAftr('السعر بعد الخصم')
//             setQty('الكمية المتاحة')
//             SetBrandID(0)
//             setSeletedSubID([])
//             setTimeout(() => setLoading(true), 1500)

//             if (product) {
//                 if (product.status === 200) {
//                     notify("تم التعديل بنجاح", "success")
//                 } else {
//                     notify("هناك مشكله", "error")
//                 }
//             }
//         }
//     }, [loading])


//     return [CatID, BrandID, onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName]

// }

// export default AdminEditProductsHook








