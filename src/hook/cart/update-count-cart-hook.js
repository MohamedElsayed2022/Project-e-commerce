import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../Redux/Actions/cartAction';
import notify from '../useNotification';

const UpdateCountCartHook = (product) => {
    const [itemCount, setItemCount] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
      if (product.count) {
        setItemCount(product.count);
      }
    }, []);
 
    const onChangeCount = (e) => {
      setItemCount(e.target.value);
    };
    const handleUpdateCart = async () => {
      if(itemCount > product.count){
        notify("لا توجد هذه الكمية من المنتج" , "warn")
        return
      }
      await dispatch(updateQuantity(product._id , {
        count: itemCount
    }));
      notify("تم تعديل كمية المنتج" , "success")
      setTimeout(() => {
        window.location.reload(false);
      }, 500);
    };

    return [handleUpdateCart , itemCount , onChangeCount]
}
export default UpdateCountCartHook