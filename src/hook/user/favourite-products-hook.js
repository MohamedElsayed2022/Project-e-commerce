import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishlist } from '../../Redux/Actions/wishlistAction';

const FavouriteProductsHook = () => {
    const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favProd, setFavProd] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishlist());
      setLoading(false);
    };
    get();
  }, []);
  const res = useSelector((state) => state.wishlist.allWishlist);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        setFavProd(res.data);
      }
    }
  }, [loading]);
  
  return [favProd]
}

export default FavouriteProductsHook