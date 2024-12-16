import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from "../../images/mobile.png";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../Redux/Actions/productsAction";
import ViewProductsDetailsHook from "../../hook/product/view-products-details-hook";

const ProductGallery = () => {
  const {id} = useParams()
  const [item , images] = ViewProductsDetailsHook(id)
    return (
        <div className="product-gallary-card d-flex justify-content-center align-items-center pt-2">
            <ReactImageGallery 
                items={images}
                showFullscreenButton={false}
                isRTL={true}
                renderLeftNav={LeftButton}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
            />
        </div>
    );
};

export default ProductGallery;
