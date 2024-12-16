import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../Redux/Actions/reviewAction";
import notify from "../useNotification";

const AddRateHook = (prodID) => {
  const [review, setReview] = useState('');
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const onChangeReview = (e) => {
    setReview(e.target.value);
  };
  const onChangeStars = (newValue) => {
      setStars(newValue)
  };

  const onSubmit = async () => {
    if(stars === "" ){
      notify("من فضلك اكمل هذا التقييم" , "error")
      return
    }
    if(review === "" || review.length === 10){
      notify("من فضلك اكمل هذا التقييم" , "error")
      return

    }
    setLoading(true);
    await dispatch(createReview(prodID, {
      review: review,
       rating: stars
  }))
    setLoading(false)
  };
   const res = useSelector((state)=>state.review.addreview)
   useEffect(() => {
    if (loading === false) {
        if (res) {
            console.log(res)
            if (res.status && res.status === 403) {
                notify("غير مسموح للادمن بالتقييم", "error")
            } else if (res.data.errors && res.data.errors[0].msg === "You already added review on this product") {
                notify("لقد قمت باضافة تقييم لهذا المنتج مسبقا", "error")
            } else if (res.status && res.status === 201) {
                notify("تمت اضافة التقييم بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
        }
    }
}, [loading])

  // const allReviews = useSelector((state)=>state.review.allReviews)

  // let reviews = []
  // if(allReviews){
  //   reviews = allReviews.data
  // }



  return [onChangeReview, onChangeStars, review, stars , onSubmit    ];
};

export default AddRateHook;
